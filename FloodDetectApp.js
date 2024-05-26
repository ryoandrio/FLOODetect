// FLOOD DETECTION EARTH ENGINE APPS

// MAIN PAGE USER INTERFACE COMPONENT

    ui.root.clear(0, Map);
    var uiMap = ui.Map();
    ui.root.widgets().add(uiMap);
    function mapSetUp() {
      uiMap.setOptions("HYBRID");
      uiMap.setCenter(118.015776, -2.6000285, 5);
      uiMap.drawingTools().set("shown", false);
    }
    mapSetUp();

    // Title UI Component
    var appsTitleLabel = ui.Label("FLOODetect", {
        fontWeight: "bold",
        fontFamily: "Arial, sans-serif",
        fontSize: "2.4rem",
        textAlign: "center"
      });
      
    var subTitleLabel = ui.Label(
        "Flood-Affected Areas Mapping Using Sentinel-1A Imagery and Cloud Computing Technology", {
          fontWeight: "bold",
          fontFamily: "Arial, sans-serif",
          fontSize: "1.2rem",
          textAlign: "center"
        });

    var descriptionLabel = ui.Label(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend nisi non elit ultricies finibus. Maecenas egestas ullamcorper libero eu tincidunt. Nullam eget orci finibus, vulputate tellus sed, euismod velit. Nam sed enim vitae elit placerat cursus sit amet finibus massa. Curabitur tincidunt mauris nec fermentum faucibus. Nulla facilisi. Nam non mollis sem, ac bibendum dolor. Donec interdum consequat turpis dignissim pulvinar.",
      {textAlign: "justify"}
    );

    // Information UI Component
    var instructionButton = ui.Button({
      label: "Instruction Manual of FLOODetect Apps",
      style: { stretch: "horizontal", color: "black" },
    });

    var instructionPanel = ui.Panel(null, null, {
      stretch: "horizontal",
      shown: false
    });

    instructionButton.onClick(function() {
      if (instructionPanel.style().get("shown")) {
        instructionButton.setLabel("Instruction Manual of FLOODetect Apps");
        instructionPanel.style().set("shown", false);
      } else {
        instructionButton.setLabel("Close Information");
        instructionPanel.style().set("shown", true);
      }
    })

    var instructionLabel = ui.Panel([
      ui.Label("Instruction Manual of FLOODetect Apps", {
        fontSize: "12px",
        fontWeight: "bold",
        margin: "15px 0 0 15px",
      }),
      ui.Label(
        "[Klik Disini] Video Tutorial Penggunaan WebGIS AeroSkySense",
        { fontSize: "12px", margin: "2px 15px 2px 15px", textAlign: "justify" },
        "https://music.youtube.com/watch?v=TN5Ye9pQhlM&list=RDAOASm6zw3fwwNHHUAmqi82kg"
      ),
      ui.Label(
        "1. Untuk mengetahui kondisi kualitas udara menggunakan WebGIS ini terdapat beberapa parameter yang harus diisi, seperti Rentang Waktu, Jenis Gas Polutan dan Wilayah Kajian.",
        { fontSize: "12px", margin: "2px 15px 2px 15px", textAlign: "justify" }
      ),
      ui.Label(
        "2. Pada parameter Rentang Waktu, dapat diisi dengan memilih waktu awal perekaman dan akhir perekaman melalui DateSlider pada bagian 'Pilih Rentang Waktu Perekaman'.",
        { fontSize: "12px", margin: "2px 15px 2px 15px", textAlign: "justify" }
      ),
      ui.Label(
        "3. Pada parameter Jenis Gas Polutan, dapat diisi dengan memilih jenis gas polutan yang terdiri dari Karbon Monoksida, Nitrogen Dioksida, Sulfur Dioksida dan Ozon pada bagian 'Pilih Jenis Gas Polutan'.",
        { fontSize: "12px", margin: "2px 15px 2px 15px", textAlign: "justify" }
      ),
      ui.Label(
        "4. Pada parameter Wilayah Kajian, dapat diisi dengan menambahkan geometri yang disesuaikan dengan halaman yang dipilih (Region of Interest, Aset, Batas Administrasi) pada bagian 'Kelola Area Wilayah Kajian'.",
        { fontSize: "12px", margin: "2px 15px 2px 15px", textAlign: "justify" }
      ),
      ui.Label(
        "5. Lakukan Analisis Konsentrasi Gas Polutan dengan Klik Tombol 'Submit dan Analisis Konsentrasi Polutan' pada bagian 'Analisis dan Visualisasi Konsentrasi Gas Polutan'. Jika ingin mengunduh datanya dapat dilakukan dengan Klik tombol 'Unduh Data Konsentrasi Polutan'",
        { fontSize: "12px", margin: "2px 15px 2px 15px", textAlign: "justify" }
      ),
      ui.Label(
        "6. Lakukan Analisis Kualitas Udara berbasis ISPU dengan Klik Tombol 'Submit dan Analisis Kualitas Udara' pada bagian 'Analisis dan Visualisasi Kualitas Udara'. Jika ingin mengunduh datanya dapat dilakukan dengan Klik tombol 'Unduh Data Kualitas Udara'",
        { fontSize: "12px", margin: "2px 15px 2px 15px", textAlign: "justify" }
      ),
      ui.Label(
        "6. Lakukan Analisis Kualitas Udara berbasis ISPU dengan Klik Tombol 'Submit dan Analisis Kualitas Udara' pada bagian 'Analisis dan Visualisasi Kualitas Udara'. Jika ingin mengunduh datanya dapat dilakukan dengan Klik tombol 'Unduh Data Kualitas Udara'",
        { fontSize: "12px", margin: "2px 15px 2px 15px", textAlign: "justify" }
      ),
      ui.Label(
        "7. Lakukan pengamatan dan analisis terhadap kondisi Konsentrasi Gas Polutan dan Kualitas Udara menggunakan fitur-fitur yang ada seperti ekstraksi nilai-nilai rata konsentrasi gas polutan melalui grafik yang akan muncul ketika melakukan analisis",
        { fontSize: "12px", margin: "2px 15px 2px 15px", textAlign: "justify" }
      ),
    ]);
    instructionPanel.add(instructionLabel);

    // Processing Information UI Component
    var processingInfoButton = ui.Button({
      label: "Data Processing Information",
      style: { stretch: "horizontal", color: "black" },
    });

    var processingInfoPanel = ui.Panel(null, null, {
      stretch: "horizontal",
      shown: false
    });

    processingInfoButton.onClick(function() {
      if (processingInfoPanel.style().get("shown")) {
        processingInfoButton.setLabel("Data Processing Information");
        processingInfoPanel.style().set("shown", false);
      } else {
        processingInfoButton.setLabel("Close Information");
        processingInfoPanel.style().set("shown", true);
      }
    })

    var processingInfoLabel = ui.Panel([
      ui.Label("Data Processing Information", {
        fontSize: "12px",
        fontWeight: "bold",
        margin: "15px 0 0 15px",
      }),
      ui.Label(
        "[Klik Disini] Video Tutorial Penggunaan WebGIS AeroSkySense",
        { fontSize: "12px", margin: "2px 15px 2px 15px", textAlign: "justify" },
        "https://music.youtube.com/watch?v=TN5Ye9pQhlM&list=RDAOASm6zw3fwwNHHUAmqi82kg"
      ),
      ui.Label(
        "1. Untuk mengetahui kondisi kualitas udara menggunakan WebGIS ini terdapat beberapa parameter yang harus diisi, seperti Rentang Waktu, Jenis Gas Polutan dan Wilayah Kajian.",
        { fontSize: "12px", margin: "2px 15px 2px 15px", textAlign: "justify" }
      ),
      ui.Label(
        "2. Pada parameter Rentang Waktu, dapat diisi dengan memilih waktu awal perekaman dan akhir perekaman melalui DateSlider pada bagian 'Pilih Rentang Waktu Perekaman'.",
        { fontSize: "12px", margin: "2px 15px 2px 15px", textAlign: "justify" }
      ),
      ui.Label(
        "3. Pada parameter Jenis Gas Polutan, dapat diisi dengan memilih jenis gas polutan yang terdiri dari Karbon Monoksida, Nitrogen Dioksida, Sulfur Dioksida dan Ozon pada bagian 'Pilih Jenis Gas Polutan'.",
        { fontSize: "12px", margin: "2px 15px 2px 15px", textAlign: "justify" }
      ),
      ui.Label(
        "4. Pada parameter Wilayah Kajian, dapat diisi dengan menambahkan geometri yang disesuaikan dengan halaman yang dipilih (Region of Interest, Aset, Batas Administrasi) pada bagian 'Kelola Area Wilayah Kajian'.",
        { fontSize: "12px", margin: "2px 15px 2px 15px", textAlign: "justify" }
      ),
      ui.Label(
        "5. Lakukan Analisis Konsentrasi Gas Polutan dengan Klik Tombol 'Submit dan Analisis Konsentrasi Polutan' pada bagian 'Analisis dan Visualisasi Konsentrasi Gas Polutan'. Jika ingin mengunduh datanya dapat dilakukan dengan Klik tombol 'Unduh Data Konsentrasi Polutan'",
        { fontSize: "12px", margin: "2px 15px 2px 15px", textAlign: "justify" }
      ),
      ui.Label(
        "6. Lakukan Analisis Kualitas Udara berbasis ISPU dengan Klik Tombol 'Submit dan Analisis Kualitas Udara' pada bagian 'Analisis dan Visualisasi Kualitas Udara'. Jika ingin mengunduh datanya dapat dilakukan dengan Klik tombol 'Unduh Data Kualitas Udara'",
        { fontSize: "12px", margin: "2px 15px 2px 15px", textAlign: "justify" }
      ),
      ui.Label(
        "6. Lakukan Analisis Kualitas Udara berbasis ISPU dengan Klik Tombol 'Submit dan Analisis Kualitas Udara' pada bagian 'Analisis dan Visualisasi Kualitas Udara'. Jika ingin mengunduh datanya dapat dilakukan dengan Klik tombol 'Unduh Data Kualitas Udara'",
        { fontSize: "12px", margin: "2px 15px 2px 15px", textAlign: "justify" }
      ),
      ui.Label(
        "7. Lakukan pengamatan dan analisis terhadap kondisi Konsentrasi Gas Polutan dan Kualitas Udara menggunakan fitur-fitur yang ada seperti ekstraksi nilai-nilai rata konsentrasi gas polutan melalui grafik yang akan muncul ketika melakukan analisis",
        { fontSize: "12px", margin: "2px 15px 2px 15px", textAlign: "justify" }
      ),
    ]);
    processingInfoPanel.add(processingInfoLabel);

    var startProcessingButton = ui.Button({
      label: "Start Data Processing",
      onClick: function() {
        ui.root.remove(mainPanel);
        uiMap.clear();
        uiMap.setOptions("HYBRID");
        drawingTools.setShown(false);
        uiMap.setCenter(118.015776, -2.6000285, 5);
        ui.root.insert(1, analysisPanel);
      },
      style: { stretch: "horizontal", color: "black" },
    });


    // Credit UI Component
    var creditPanel = ui.Panel([
      ui.Label("Credits:", {
        fontWeight: "bold",
        fontSize: "14px",
        margin: "15px 0 0 12px"
      }),
      ui.Label("● Developed by Ryo Dwi Permana Andrio", {
        fontSize: "13px",
        margin: "2px 15px 2px 15px",
        textAlign: "justify"
      }),
      ui.Label("●This Apps was developed as a part of my Undergraduate of GIS Thesis at Universitas Gadjah Mada", {
        fontSize: "13px",
        margin: "2px 15px 2px 15px",
        textAlign: "justify"
      }),
      ui.Label("● Contact:", {
        fontSize: "13px",
        margin: "2px 15px 2px 15px",
        textAlign: "justify"
      }),
      ui.Label("- Email: ryodwi2020@mail.ugm.ac.id", {
        fontSize: "13px",
        margin: "2px 15px 2px 25px",
        textAlign: "justify"
      },"mailto:ryodwi2020@mail.ugm.ac.id"),
      ui.Label("- LinkedIn", {
        fontSize: "13px",
        margin: "2px 15px 2px 25px",
        textAlign: "justify"
      },"https://www.linkedin.com/in/ryo-dwi-permana-a-229aa9137"),
      ui.Label("- Github Repository", {
        fontSize: "13px",
        margin: "2px 15px 2px 25px",
        textAlign: "justify"
      },"https://github.com/ryoandrio/"),
    ])

    // Set Main Page Interface
    var mainPanel = ui.Panel({
      widgets: [
        appsTitleLabel,
        subTitleLabel,
        descriptionLabel,
        instructionButton,
        instructionPanel,
        processingInfoButton,
        processingInfoPanel,
        startProcessingButton
      ],
      style: {
        width: "30%"
      }
    });

    // Add CreditPanel to MainPanel
    mainPanel.add(creditPanel);

    // Set MainPanel as ui.root
    ui.root.insert(0, mainPanel);

// ####################################################################### //

// ANALYSIS PAGE USER INTERFACE COMPONENT

    var analysisTitleLabel = ui.Label("FLOODetect", {
        fontWeight: "bold",
        fontFamily: "Arial, sans-serif",
        fontSize: "2rem",
        textAlign: "center"
    });

    var analysisSubTitleLabel = ui.Label(
        "Flood-Affected Areas Mapping Using Sentinel-1A Imagery and Cloud Computing Technology", {
          fontWeight: "bold",
          fontFamily: "Arial, sans-serif",
          fontSize: "1rem",
          textAlign: "justify"
    });

     // Information UI Component (Analysis Page)
    var analysisInstructionButton = ui.Button({
      label: "Instruction Manual of FLOODetect Apps",
      style: { stretch: "horizontal", color: "black" },
    });

    var analysisInstructionPanel = ui.Panel(null, null, {
      stretch: "horizontal",
      shown: false
    });

    analysisInstructionButton.onClick(function() {
      if (analysisInstructionPanel.style().get("shown")) {
        analysisInstructionButton.setLabel("Instruction Manual of FLOODetect Apps");
        analysisInstructionPanel.style().set("shown", false);
      } else {
        analysisInstructionButton.setLabel("Close Information");
        analysisInstructionPanel.style().set("shown", true);
      }
    })

    var analysisInstructionLabel = ui.Panel([
      ui.Label("Instruction Manual of FLOODetect Apps", {
        fontSize: "12px",
        fontWeight: "bold",
        margin: "15px 0 0 15px",
      }),
      ui.Label(
        "[Klik Disini] Video Tutorial Penggunaan WebGIS AeroSkySense",
        { fontSize: "12px", margin: "2px 15px 2px 15px", textAlign: "justify" },
        "https://music.youtube.com/watch?v=TN5Ye9pQhlM&list=RDAOASm6zw3fwwNHHUAmqi82kg"
      ),
      ui.Label(
        "1. Untuk mengetahui kondisi kualitas udara menggunakan WebGIS ini terdapat beberapa parameter yang harus diisi, seperti Rentang Waktu, Jenis Gas Polutan dan Wilayah Kajian.",
        { fontSize: "12px", margin: "2px 15px 2px 15px", textAlign: "justify" }
      ),
      ui.Label(
        "2. Pada parameter Rentang Waktu, dapat diisi dengan memilih waktu awal perekaman dan akhir perekaman melalui DateSlider pada bagian 'Pilih Rentang Waktu Perekaman'.",
        { fontSize: "12px", margin: "2px 15px 2px 15px", textAlign: "justify" }
      ),
      ui.Label(
        "3. Pada parameter Jenis Gas Polutan, dapat diisi dengan memilih jenis gas polutan yang terdiri dari Karbon Monoksida, Nitrogen Dioksida, Sulfur Dioksida dan Ozon pada bagian 'Pilih Jenis Gas Polutan'.",
        { fontSize: "12px", margin: "2px 15px 2px 15px", textAlign: "justify" }
      ),
      ui.Label(
        "4. Pada parameter Wilayah Kajian, dapat diisi dengan menambahkan geometri yang disesuaikan dengan halaman yang dipilih (Region of Interest, Aset, Batas Administrasi) pada bagian 'Kelola Area Wilayah Kajian'.",
        { fontSize: "12px", margin: "2px 15px 2px 15px", textAlign: "justify" }
      ),
      ui.Label(
        "5. Lakukan Analisis Konsentrasi Gas Polutan dengan Klik Tombol 'Submit dan Analisis Konsentrasi Polutan' pada bagian 'Analisis dan Visualisasi Konsentrasi Gas Polutan'. Jika ingin mengunduh datanya dapat dilakukan dengan Klik tombol 'Unduh Data Konsentrasi Polutan'",
        { fontSize: "12px", margin: "2px 15px 2px 15px", textAlign: "justify" }
      ),
      ui.Label(
        "6. Lakukan Analisis Kualitas Udara berbasis ISPU dengan Klik Tombol 'Submit dan Analisis Kualitas Udara' pada bagian 'Analisis dan Visualisasi Kualitas Udara'. Jika ingin mengunduh datanya dapat dilakukan dengan Klik tombol 'Unduh Data Kualitas Udara'",
        { fontSize: "12px", margin: "2px 15px 2px 15px", textAlign: "justify" }
      ),
      ui.Label(
        "6. Lakukan Analisis Kualitas Udara berbasis ISPU dengan Klik Tombol 'Submit dan Analisis Kualitas Udara' pada bagian 'Analisis dan Visualisasi Kualitas Udara'. Jika ingin mengunduh datanya dapat dilakukan dengan Klik tombol 'Unduh Data Kualitas Udara'",
        { fontSize: "12px", margin: "2px 15px 2px 15px", textAlign: "justify" }
      ),
      ui.Label(
        "7. Lakukan pengamatan dan analisis terhadap kondisi Konsentrasi Gas Polutan dan Kualitas Udara menggunakan fitur-fitur yang ada seperti ekstraksi nilai-nilai rata konsentrasi gas polutan melalui grafik yang akan muncul ketika melakukan analisis",
        { fontSize: "12px", margin: "2px 15px 2px 15px", textAlign: "justify" }
      ),
    ]);
    analysisInstructionPanel.add(analysisInstructionLabel);

    // Pre Flood UI Component
    var preFloodLabel = ui.Label("Pre-Flood Date Range", {
      fontWeight: "bold",
      fontSize: "1.2rem",
    });

    var preFloodDateStartLabel = ui.Label("Pre-Flood start date:", {
      fontSize: "14px",
    });

    var preFloodDateStartSlider = ui.DateSlider({
      start: "2019-01-01",
      end: "2024-12-31",
      value: "2024-01-01",
      period: 1,
      style: { stretch: "horizontal" },
    });
    
    var preFloodDateEndLabel = ui.Label("Pre-Flood end date:", {
      fontSize: "14px",
    });
    
    var preFloodDateEndSlider = ui.DateSlider({
      start: "2019-01-01",
      end: "2024-12-31",
      value: "2024-01-01",
      period: 1,
      style: { stretch: "horizontal" },
    });

    var preFloodStartPanel = ui.Panel({
      widgets: [
        preFloodDateStartLabel,
        preFloodDateStartSlider
      ],
      style: {
        stretch: "horizontal"
      },
      layout: ui.Panel.Layout.flow("vertical")
    });

    var preFloodEndPanel = ui.Panel({
      widgets: [
        preFloodDateEndLabel,
        preFloodDateEndSlider
      ],
      style: {
        stretch: "horizontal"
      },
      layout: ui.Panel.Layout.flow("vertical")
    })
    
    var preFloodPanel = ui.Panel({
      widgets: [
        preFloodStartPanel,
        preFloodEndPanel
      ],
      style: {
        stretch: "horizontal",
        shown: false
      },
      layout: ui.Panel.Layout.flow("horizontal")
    })

    var preFloodDateButton = ui.Button({
      label: "Submit Pre-Flood Date Range",
      style: { stretch: "horizontal", color: "black" },
    });

    preFloodDateButton.onClick(function() {
      if (preFloodPanel.style().get("shown")) {
        preFloodDateButton.setLabel("Submit Pre-Flood Date Range");
        preFloodPanel.style().set("shown", false);
      } else {
        preFloodDateButton.setLabel("Close Information");
        preFloodPanel.style().set("shown", true);
      }
    })

    // Flood UI Component
    var floodLabel = ui.Label("Flood Date Range", {
      fontWeight: "bold",
      fontSize: "1.2rem",
    });

    var floodDateStartLabel = ui.Label("Flood start date:", {
      fontSize: "14px",
    });

    var floodDateStartSlider = ui.DateSlider({
      start: "2019-01-01",
      end: "2024-12-31",
      value: "2024-01-01",
      period: 1,
      style: { stretch: "horizontal" },
    });
    
    var floodDateEndLabel = ui.Label("Flood end date:", {
      fontSize: "14px",
    });
    
    var floodDateEndSlider = ui.DateSlider({
      start: "2019-01-01",
      end: "2024-12-31",
      value: "2024-01-01",
      period: 1,
      style: { stretch: "horizontal" },
    });

    var floodStartPanel = ui.Panel({
      widgets: [
        floodDateStartLabel,
        floodDateStartSlider
      ],
      style: {
        stretch: "horizontal",
      },
      layout: ui.Panel.Layout.flow("vertical")
    });

    var floodEndPanel = ui.Panel({
      widgets: [
        floodDateEndLabel,
        floodDateEndSlider
      ],
      style: {
        stretch: "horizontal"
      },
      layout: ui.Panel.Layout.flow("vertical")
    })
    
    var floodPanel = ui.Panel({
      widgets: [
        floodStartPanel,
        floodEndPanel
      ],
      style: {
        stretch: "horizontal",
        shown: false
      },
      layout: ui.Panel.Layout.flow("horizontal")
    })

    var floodDateButton = ui.Button({
      label: "Submit Flood Date Range",
      style: { stretch: "horizontal", color: "black" },
    });

    floodDateButton.onClick(function() {
      if (floodPanel.style().get("shown")) {
        floodDateButton.setLabel("Submit Pre-Flood Date Range");
        floodPanel.style().set("shown", false);
      } else {
        floodDateButton.setLabel("Close Information");
        floodPanel.style().set("shown", true);
      }
    })

    // Draw ROI UI Component
    var drawROILabel = ui.Label("Region of Interest (ROI) Setting", {
      fontWeight: "bold",
      fontSize: "1.2rem",
    });
    
    var drawROIButton = ui.Button({
      label: "Draw Region of Interest (ROI)",
      onClick: function() {
        drawROIFunction();
        setGeometryROI();
      },
      style: { stretch: "horizontal", color: "black" },
    });

    var deleteROIButton = ui.Button({
      label: "Delete Region of Interest (ROI)",
      onClick: function() {
        deleteROIFunction();
      },
      style: { stretch: "horizontal", color: "black" },
    });

    // ROI function
    // var drawingTools = Map.drawingTools();
    var drawingTools = uiMap.drawingTools();
    var geometry = null;
    var geometryImage = null;
    drawingTools.onDraw(geometryHandle);

    function drawROIFunction() {
      drawingTools.clear();
      drawingTools.setShown(true);
      drawingTools.setShape("rectangle");
      drawingTools.draw();
    }

    function deleteROIFunction() {
      drawingTools.clear();
      drawingTools.setShown(false);
    }

    function geometryHandle(geom) {
      print("Geometry has been created: ", geom)
    }

    function setGeometryROI() {
      var geom = drawingTools.layers().get(0).toGeometry();
      if (geom) {
        geometry = geom;
        print("Geometry has been set.")
      }
    }

    // Flood-Affected Area Analysis UI Component
    var mappingFloodLabel= ui.Label("Mapping Flood-Affected Area", {
      fontWeight: "bold",
      fontSize: "1.2rem",
    });

    var mappingFloodButton = ui.Button({
      label: "Start Mapping Flood-Affected Area",
      onClick: function() {
        uiMap.clear();
        floodAreaMapping();
      },
      style: { stretch: "horizontal", color: "black" },
    });

    var mappingFloodDownloadButton = ui.Button({
      label: "Download Flood-Affected Area",
      onClick: function() {
        downloadData();
      },
      style: { stretch: "horizontal", color: "black" },
    });

    var analysisBackButton = ui.Button({
      label: "Back to Main Page",
      onClick: function() {
        ui.root.remove(analysisPanel);
        uiMap.clear();
        uiMap.setOptions("HYBRID");
        drawingTools.setShown(false);
        uiMap.setCenter(118.015776, -2.6000285, 5);
        ui.root.insert(0, mainPanel);
      },
      style: { stretch: "horizontal", color: "black" },
    });

    var analysisPanel = ui.Panel({
      widgets: [
        analysisTitleLabel,
        analysisSubTitleLabel,
        analysisInstructionButton,
        analysisInstructionPanel,
        preFloodLabel,
        preFloodDateButton,
        preFloodPanel,
        floodLabel,
        floodDateButton,
        floodPanel,
        drawROILabel,
        drawROIButton,
        deleteROIButton,
        mappingFloodLabel,
        mappingFloodButton,
        mappingFloodDownloadButton,
        analysisBackButton
      ],
      style: {
        width: "25%"
      }
    });

// ####################################################################### //

  //URL Panel
  var urlPanel = ui.Panel({
    style: {
      position: "bottom-left",
      padding: "8px 5px",
      width: "350px",
      // height: "180px",
    },
  });

// ####################################################################### //

// FLOOD DETECTION FUNCTION

    // Declare the global variables
    var preFloodStartDateObj, preFloodEndDateObj, floodStartDateObj, floodEndDateObj;

    var ndfi_flood, ndfi_flood_smooth, flood_vector;

    // Set the date range for Pre-Flood Imagery 
    function setParams() {
      // Get the date variable value from the DateSlider
      var preFloodStartDate = preFloodDateStartSlider.getValue()[0];
      var preFloodEndDate = preFloodDateEndSlider.getValue()[0];
      var floodStartDate = floodDateStartSlider.getValue()[0];
      var floodEndDate = floodDateEndSlider.getValue()[0];

      // Convert Unix Timestamp to Date Object
      preFloodStartDateObj = ee.Date(preFloodStartDate);
      preFloodEndDateObj = ee.Date(preFloodEndDate);
      floodStartDateObj = ee.Date(floodStartDate);
      floodEndDateObj = ee.Date(floodEndDate);
    }
    setParams();

    // Clip Imagery Function
    function clipImagery() {
      if(geometryImage) {
        //call Set Parameter Function
        setParams();

        //Convert the date objects to YYYY-MM-DD format
        var before_start = preFloodStartDateObj.format('YYYY-MM-dd');
        var before_end = preFloodEndDateObj.format('YYYY-MM-dd');

        var after_start = floodStartDateObj.format('YYYY-MM-dd');
        var after_end = floodEndDateObj.format('YYYY-MM-dd');
        

      }
    }

    // Flood Mapping Algorithm Function
    function floodAreaMapping() {
      var geom = drawingTools.layers().get(0).toGeometry();
      if (geom) {
        geometry = geom;
        // clipImagery(); 
      }
      var feature = ee.Feature(geom, {})
      
      //call set parameter Functio
      setParams();

      //set date range
      var before_start = preFloodStartDateObj.format("YYYY-MM-dd");
      var before_end = preFloodEndDateObj.format("YYYY-MM-dd");

      var after_start = floodStartDateObj.format("YYYY-MM-dd");
      var after_end = floodEndDateObj.format("YYYY-MM-dd");

      //declare variables
      var polarization = "VH"
      var pass_direction = "ASCENDING"
      var k_ndfi = 1

      //declare datasets
      var dem = ee.ImageCollection('JAXA/ALOS/AW3D30/V3_2').select('DSM');
      var proj = dem.first().select(0).projection();
      var slope = ee.Terrain.slope(dem.mosaic().setDefaultProjection(proj))
      var swater = ee.Image('JRC/GSW1_0/GlobalSurfaceWater').select('seasonality');
      
      var collection = ee.ImageCollection('COPERNICUS/S1_GRD')
        .filter(ee.Filter.eq('instrumentMode', 'IW'))
        .filter(ee.Filter.listContains('transmitterReceiverPolarisation', polarization))
        .filter(ee.Filter.eq('orbitProperties_pass', pass_direction)) 
        .filter(ee.Filter.eq('resolution_meters', 10))
        .filterBounds(geometry)
        .select(polarization)

      var before = collection.filterDate(before_start, before_end);
      var after = collection.filterDate(after_start, after_end);

      //Generating Reference and Flood Multi-temporal SAR Data
      //Mean Before and Min After
      var mean_before = before.mean().clip(geometry)
      var min_after = after.min().clip(geometry)
      var max_after = after.max().clip(geometry)
      var mean_after = after.mean().clip(geometry)

      // Flood Identification using NDFI
      var ndfi = mean_before.abs().subtract(min_after.abs())
                .divide(mean_before.abs().add(min_after.abs()));
      var ndfi_filtered = ndfi.focal_mean({radius: 50, kernelType: 'circle', units: 'meters'});

      // NDFI Normalization
      var ndfi_min = ndfi_filtered.reduceRegion({
      reducer: ee.Reducer.min(),
      geometry: geometry,
      scale: 10,
      maxPixels: 1e13
      });

      var ndfi_max = ndfi_filtered.reduceRegion({
      reducer: ee.Reducer.max(),
      geometry: geometry,
      scale: 10,
      maxPixels: 1e13
      });

      var ndfi_rang = ee.Number(ndfi_max.get('VH')).subtract(ee.Number(ndfi_min.get('VH')));
      var ndfi_subtctMin = ndfi_filtered.subtract(ee.Number(ndfi_min.get('VH')));
      var ndfi_norm = ndfi_subtctMin.divide(ndfi_rang);

      var histogram = ui.Chart.image.histogram({
        image: ndfi_norm,
        region: geometry,
        scale: 10,
        maxPixels: 1e13
      });
      // print("ndfi_norm Histogram", histogram);
      
      // NDFI Thresholding
      var ndfi_mean = ndfi_norm.reduceRegion({
      reducer: ee.Reducer.mean(),
      geometry: geometry,
      scale: 10,
      maxPixels: 1e13
      });
      
      var ndfi_std = ndfi_norm.reduceRegion({
      reducer: ee.Reducer.stdDev(),
      geometry: geometry,
      scale: 10,
      maxPixels: 1e13
      });
      
      var ndfi_th = ee.Number(ndfi_mean.get('VH')).subtract(ee.Number(k_ndfi).multiply(ee.Number(ndfi_std.get('VH'))));
      print('ndfi_th = ', ndfi_th);
      
      // Apply Thresholding Value on NDFI (lt is lower than)
      var ndfi_filtered = ndfi_norm.lt(ndfi_th);
      
      
      // NDFI Masking
      var swater_mask = swater.gte(4);  //gte is greater than equal
      var swater_clip = swater_mask.clip(geometry);
      
      var ndfi_flooded_masked = ndfi_filtered.where(swater_mask, 0);
      var connections = ndfi_flooded_masked.connectedPixelCount().gte(25);
      ndfi_flooded_masked = ndfi_flooded_masked.updateMask(connections.eq(1));
      ndfi_flood = ndfi_flooded_masked.updateMask(ndfi_flooded_masked.eq(1));
      ndfi_flood_smooth = ndfi_flood.focalMean(1, 'circle');
      ndfi_flood_smooth = ndfi_flood_smooth.toInt();

      // Visualizing result
      uiMap.setOptions('HYBRID');
      uiMap.addLayer(ndfi_flood_smooth, {palette: 'blue'}, 'Flooded Area', 1);
      uiMap.centerObject(geometry);

      // Convert the result to vector format
      flood_vector = ndfi_flood_smooth.reduceToVectors({
        geometry: geometry,
        scale: 10,
        maxPixels: 1e13,
        geometryType: 'polygon',
        eightConnected: false,
        labelProperty: 'flood',
        reducer: ee.Reducer.countEvery(),
        bestEffort: true
      });
      var flood_vector_drawn = ee.Image(0).updateMask(0).paint(flood_vector, '000000', 1);
      uiMap.addLayer(flood_vector_drawn, {palette: '000000'}, 'Flooded Area (polygon)');

      //call legend function
      legendFlood();
    }

// ####################################################################### //

// LEGEND FUNCTION

    // Create legend function
    function legendFlood() {
      //create legend panel
      var legendPanel = ui.Panel({
        style: {
          position: "bottom-left",
          padding: "8px 10px",
        },
      });
      //create legend title
      var legendTitle = ui.Label({
        value: "Legend",
        style: {
          fontWeight: "bold",
          fontSize: "14px",
          margin: "0 0 4px 0",
          padding: "0",
        },
      });
      legendPanel.add(legendTitle);
      //create legend content
      var legendContent = function (color, range) {
        var colorBox = ui.Label({
          style: {
            backgroundColor: "#" + color,
            padding: "8px",
            margin: "0 0 6px 0",
          },
        });
        var description = ui.Label({
          value: range,
          style: {
            margin: "0 0 4px 6px",
          },
        });
        return ui.Panel({
          widgets: [
            ui.Panel({
              widgets: [colorBox],
              layout: ui.Panel.Layout.Flow("horizontal"),
            }),
            ui.Panel({
              widgets: [description],
              layout: ui.Panel.Layout.Flow("horizontal"),
            }),
          ],
          layout: ui.Panel.Layout.Flow("horizontal"),
        });
      };
      var legendColor = ["0000FF"];
      var legendInfo = ["Flooded Area"];
      for (var i = 0; i < legendColor.length; i++) {
        legendPanel.add(legendContent(legendColor[i], legendInfo[i]));
      }
      uiMap.add(legendPanel);
    }
// ####################################################################### //

// DOWNLOAD FUNCTION

    function downloadData() {
      //set geometry
      var geom = drawingTools.layers().get(0).toGeometry();
      if (geom) {
        geometry = geom;
        clipImagery();
      }
      var feature = ee.Feature(geom, {})

      //call set parameter Function
      setParams();

      //set date of flood
      var flood_start = floodStartDateObj.format("YYYY-MM-dd").getInfo();
      var flood_end = floodEndDateObj.format("YYYY-MM-dd").getInfo();

      //export flood-affected area
      // Export.image.toDrive({
      //   image: ndfi_flood_smooth,
      //   description: 'FloodAffectedArea_' + flood_start + '_' + flood_end,
      //   region: geometry,
      //   scale: 10,
      //   fileFormat: 'GeoTIFF',
      // });

      // Export.table.toDrive({
      //   collection: flood_vector,
      //   description:'FloodAffectedArea_Vector_' + flood_start + '_' + flood_end,
      //   fileFormat: 'GeoJSON'
      // });

      //get download link
      // var downloadUrlFlood = ndfi_flood_smooth.getDownloadURL({
      //   name: 'FloodAffectedArea_' + flood_start + '_' + flood_end,
      //   scale: 10,
      //   region: geometry,
      //   format: 'ZIPPED_GEO_TIFF',
      // });

      var downloadUrlFloodVector = flood_vector.getDownloadURL({
        filename: 'VectorFloodAffectedArea_' + flood_start + '_' + flood_end,
        format: 'GeoJSON',
      });

      var downloadUrlFloodVectorSHP = flood_vector.getDownloadURL({
        filename: 'VectorFloodAffectedArea_' + flood_start + '_' + flood_end,
        format: 'SHP',
      });

      //create label for download link
      var urlLabel = ui.Label('Click to Download Data', {
        fontWeight: 'bold',
      });
      // var downloadLink = ui.Label({
      //   value:
      //     "• Download Flood-Affected Area Data [GeoTIFF]" +
      //     " " +
      //     "(" +
      //     flood_start +
      //     ")" +
      //     "-" +
      //     "(" +
      //     flood_end +
      //     ")",
      //   targetUrl: downloadUrlFlood,
      // });
      var downloadLinkVector = ui.Label({
        value:
          "• Download Flood-Affected Area Data [GeoJSON]" +
          " " +
          "(" +
          flood_start +
          ")" +
          "-" +
          "(" +
          flood_end +
          ")",
        targetUrl: downloadUrlFloodVector,
      });
      var downloadLinkVectorSHP = ui.Label({
        value:
          "• Download Flood-Affected Area Data [Shapefile]" +
          " " +
          "(" +
          flood_start +
          ")" +
          "-" +
          "(" +
          flood_end +
          ")",
        targetUrl: downloadUrlFloodVectorSHP,
      });

      //add download link to the panel
      urlPanel.clear();
      urlPanel.add(urlLabel);
      // urlPanel.add(downloadLink);
      urlPanel.add(downloadLinkVector);
      urlPanel.add(downloadLinkVectorSHP);
      uiMap.add(urlPanel);
    }
