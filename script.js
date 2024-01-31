require([
  "esri/Map",
  "esri/layers/CSVLayer",
  "esri/views/MapView",
  "esri/config",
  "esri/core/urlUtils",
  "dojo/domReady!"
], function(
  Map,
  CSVLayer,
  MapView,
  esriConfig,
  urlUtils
) {
  var url = "https://raw.githubusercontent.com/orhuna/WebGIS_SLU_M1/main/Module%202/stl_crime_wgs_84.csv";
  esriConfig.request.corsEnabledServers.push('https://raw.githubusercontent.com');

  // Update the template to match the fields in your CSV file
  const template = {
    title: "Crime Info",
    content: "Details about the crime event."
    // Customize the content with appropriate fields from your CSV
  };

  const csvLayer = new CSVLayer({
    url: url,
    popupTemplate: template
  });

  var symbol = {
    type: "simple-marker", 
    color: "red"
  };

  csvLayer.renderer = {
    type: "simple",
    symbol: symbol
  };

  var map = new Map({
    basemap: "gray",
    layers: [csvLayer]
  });

  var view = new MapView({
    container: "viewDiv",
    center: [-90.1994, 38.6270],
    zoom: 10,
    map: map
  });
});

