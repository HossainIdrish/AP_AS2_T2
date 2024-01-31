require(["esri/WebScene", "esri/layers/CSVLayer", "esri/views/SceneView"], (
    WebScene,
    CSVLayer,
    SceneView
) => {
    const url = "https://raw.githubusercontent.com/orhuna/WebGIS_SLU_M1/main/Module%202/stl_crime_wgs_84.csv";

    const template = {
        title: "Earthquake Info",
        content: "Magnitude {mag} {type} hit {place} on {time}."
    };

    const csvLayer = new CSVLayer({
        url: url,
        copyright: "USGS Earthquakes",
        popupTemplate: template
    });

    csvLayer.renderer = {
        type: "simple",
        symbol: {
            type: "point-3d",
            symbolLayers: [{
                type: "icon",
                resource: { primitive: "circle" },
                material: { color: [255, 84, 54, 1] },
                size: 5
            }, {
                type: "icon",
                resource: { primitive: "circle" },
                material: { color: [255, 84, 54, 0] },
                outline: { color: [255, 84, 54, 0.6], size: 1 },
                size: 25
            }]
        }
    };

    const map = new WebScene({
        portalItem: {
            id: "a467ef1140de4e88acf34d38df9fb869"
        }
    });

    map.add(csvLayer);

    const view = new SceneView({
        container: "viewDiv",
        qualityProfile: "high",
        map: map,
        alphaCompositingEnabled: true,
        highlightOptions: {
            fillOpacity: 0,
            color: "#ffffff"
        },
        constraints: {
            altitude: {
                min: 700000
            }
        },
        environment: {
            background: {
                type: "color",
                color: [0, 0, 0, 0]
            },
            lighting: {
                type: "virtual"
            }
        }
    });
});

