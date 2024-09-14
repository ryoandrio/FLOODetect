# FLOODetect Application
This repository contains the script of FLOODetect App, an Earth Engine Apps to detect flood-affected area using Sentinel-1 imagery.

FLOODetect link: https://ee-ryodwi2020.projects.earthengine.app/view/floodetect

-------------------------
## Background
Over the past decade as recorded by IMF and BNPB, floods have been the
most frequent disaster in the world and in Indonesia. In 2020, there were 1.531 floods in Indonesia. Several region in Indonesia have high flood risk, especially in large metropolitan areas, due to several factors such as land subsidence, groundwater exploitation, and poor drainage systems. Under those circumstances floods can be very damaging. The minimalization of damage can begin with rapid mapping to determine the affected areas. Combination of remote sensing data and cloud computing technology can be an alternative method for flood rapid mapping.

## Objectives
Therefore, this research aims to 
1. develop a cloud-based application for floodaffected area mapping using Sentinel-1 imagery
2. determine the usability level of the developed application
3. test the accuracy of the flood-affected areas from the developed application

## Methods
Flood-affected areas mapping uses Sentinel-1A SAR imagery as input data, divided into preflood dataset and flood dataset. The method used is change detection and thresholding to determine the level of change from preflood imagery and flood imagery represented by Normalize Difference Flood Index (NDFI) value and extract the floodarea data with certain threshold value. The mapping algorithm is transformed into an application system developed on native Google Earth Engine platform. 

![Flow Chart](images/diagram_alir_proses.drawio.png 'Flow Chart of Flood Mapping methods')

*Flow Chart of Flood Mapping methods*

## How to Use the Apps
[[Click Here] Video Tutorial of FLOODetect Apps](https://s.id/VideoTutorialFLOODetect)

User Guide:
1. To map the flood-affected area with this app, several parameters are needed, including the pre-flood date range, the flood event date range, and the study area.
2. The Pre-Flood Date Range is the period when the study area is in normal condition and flooding has not occurred. There are two date sliders that need to be adjusted in this parameter to determine the start and the end date of the pre-flood period (which can be several days before the flood occurs). It is recommended that the pre-flood time range covers more than 30 days.
3. The Flood Date Range is the period when the study area is experiencing flooding or inundation. There are two date sliders that need to be adjusted in this parameter to determine the start date and the end date of the flood period.
4. The Study Area parameter is added through drawing tools.
5. Perform the flood area mapping by clicking the “Start Mapping Flood-Affected Area” button.
6. The application display will change to a split panel. The flood area mapping results will be displayed on both panels in blue color
7. The split panel can be used to compare the Sentinel-1 Pre-flood imagery (left panel) and Post-flood imagery (right panel).
8. The total flood area will be displayed in the bottom right corner after a few moments.
9. To download the mapping data, click the “Download Flood-Affected Area” button. A panel containing the data download link will appear in the bottom left corner. The data formats currently available for download are GeoJSON and Shapefile.

## Preview
![Main Page](images/main_page.png 'Main Page')
*Main Page*

![Analysis Page](images/analysis_page.png 'Analysis Page')
*Analysis Page*

![Result](images/result.png 'Result of Mapping Demak-Kudus Flood 2024')
*Result Example of Mapping Demak-Kudus Flood 2024*

## Credits
- Developed by Ryo Dwi Permana Andrio under supervision of Dr. Nur Mohammad Farda, S.Si., M.Cs.
- This Apps was developed as a part of my Applied Bachelor of GIS Thesis at Universitas Gadjah Mada
- You can contact me at email ryodwi2020@mail.ugm.ac.id or via my [LinkedIn](https://www.linkedin.com/in/ryo-dwi-permana-a-229aa9137 'LinkedIn')
    