// Script of Flood Detection Algorithm

// Define Paramaters
var params = [
  '2023-12-20',   //before_start
  '2024-01-31',   //before_end
  '2024-02-01',   //after_start
  '2024-03-31',   //after_end
  0.5,            //k_ndfi
  ];

// SAR Input Data
var before_start = params[0];
var before_end = params[1];

var after_start = params[2];
var after_end = params[3];

var polarization = "VH";
var pass_direction = "ASCENDING";

// k Coefficient Values for Normalized Difference Flood Index (NDFI)
var k_ndfi = params[4];

// Dataset
var collection = ee.ImageCollection('COPERNICUS/S1_GRD')
.filter(ee.Filter.eq('instrumentMode', 'IW'))
.filter(ee.Filter.listContains('transmitterReceiverPolarisation', polarization))
.filter(ee.Filter.eq('orbitProperties_pass', pass_direction)) 
.filter(ee.Filter.eq('resolution_meters', 10))
.filterBounds(bounds)
.select(polarization);

var swater = ee.Image('JRC/GSW1_0/GlobalSurfaceWater').select('seasonality');
var dem = ee.ImageCollection('JAXA/ALOS/AW3D30/V3_2').select('DSM');
var proj = dem.first().select(0).projection();
var slope = ee.Terrain.slope(dem.mosaic().setDefaultProjection(proj))

var before = collection.filterDate(before_start, before_end); //BeforeFlood Dataset (PraBanjir)
var after = collection.filterDate(after_start, after_end); //AfterFlood Dataset (PaskaBanjir)
print("before", before);
print("after", after);

// Generating Reference and Flood Multi-temporal SAR Data (MEAN Before and MIN After)
var mean_before = before.mean().clip(bounds);
var min_after = after.min().clip(bounds);
var max_after = after.max().clip(bounds);
var mean_after = after.mean().clip(bounds);

Map.addLayer(mean_before, {min: -29.264204107025904, max: -8.938093778644141, palette: []}, "mean_before",0);
Map.addLayer(min_after, {min: -29.29334290990966, max: -11.928313976797138, palette: []}, "min_after",1);


// Flood Identification using NDFI
var ndfi = mean_before.abs().subtract(min_after.abs())
          .divide(mean_before.abs().add(min_after.abs()));
var ndfi_filtered = ndfi.focal_mean({radius: 50, kernelType: 'circle', units: 'meters'});

// NDFI Normalization
var ndfi_min = ndfi_filtered.reduceRegion({
reducer: ee.Reducer.min(),
geometry: bounds,
scale: 10,
maxPixels: 1e13
});

var ndfi_max = ndfi_filtered.reduceRegion({
reducer: ee.Reducer.max(),
geometry: bounds,
scale: 10,
maxPixels: 1e13
});

var ndfi_rang = ee.Number(ndfi_max.get('VH')).subtract(ee.Number(ndfi_min.get('VH')));
var ndfi_subtctMin = ndfi_filtered.subtract(ee.Number(ndfi_min.get('VH')));
var ndfi_norm = ndfi_subtctMin.divide(ndfi_rang);

Map.addLayer(ndfi_norm, {min: 0.3862747346632676, max: 0.7632898395906615}, "ndfi_norm",0);

var histogram = ui.Chart.image.histogram({
image: ndfi_norm,
region: bounds,
scale: 10,
maxPixels: 1e13
});
print("ndfi_norm Histogram", histogram);

// NDFI Thresholding
var ndfi_mean = ndfi_norm.reduceRegion({
reducer: ee.Reducer.mean(),
geometry: bounds,
scale: 10,
maxPixels: 1e13
});

var ndfi_std = ndfi_norm.reduceRegion({
reducer: ee.Reducer.stdDev(),
geometry: bounds,
scale: 10,
maxPixels: 1e13
});

var ndfi_th = ee.Number(ndfi_mean.get('VH')).subtract(ee.Number(k_ndfi).multiply(ee.Number(ndfi_std.get('VH'))));
print('ndfi_th = ', ndfi_th);

// Apply Thresholding Value on NDFI (lt is lower than)
var ndfi_filtered = ndfi_norm.lt(ndfi_th);


// NDFI Masking
var swater_mask = swater.gte(4);  //gte is greater than equal
var swater_clip = swater_mask.clip(bounds);
var slope_mask = slope.lt(1)

var ndfi_flooded_masked = ndfi_filtered.where(swater_mask, 0).updateMask(slope_mask.eq(1));
// var ndfi_flooded_masked = ndfi_filtered.where(swater_mask, 0);
var connections = ndfi_flooded_masked.connectedPixelCount().gte(25);
ndfi_flooded_masked = ndfi_flooded_masked.updateMask(connections.eq(1));
var ndfi_flood = ndfi_flooded_masked.updateMask(ndfi_flooded_masked.eq(1));

// Visualizing result
Map.addLayer(ndfi_flood, {palette: 'blue'}, 'ndfi_flood',0);
Map.setOptions('HYBRID');
Map.centerObject(bounds);