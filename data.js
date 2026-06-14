var APP_DATA = {
  "scenes": [
    {
      "id": "0-main-entrance",
      "name": "Main Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3000,
      "initialViewParameters": {
        "yaw": -0.44363790028669214,
        "pitch": -0.11465447710304844,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.6693830660458389,
          "pitch": 0.004613490094046213,
          "rotation": 0,
          "target": "1-bar-counter"
        },
        {
          "yaw": -0.48095856272995086,
          "pitch": -0.4653161060851012,
          "rotation": 0,
          "target": "2-upper-seating-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bar-counter",
      "name": "Bar Counter",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3000,
      "initialViewParameters": {
        "yaw": 0.043159966657016824,
        "pitch": 0.030536667731610123,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 1.6104054346240515,
          "pitch": 0.03986981304194792,
          "rotation": 0,
          "target": "0-main-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-upper-seating-area",
      "name": "Upper Seating Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3000,
      "initialViewParameters": {
        "yaw": -2.8632420934904275,
        "pitch": 0.03571537970857719,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -3.030193360343567,
          "pitch": 0.18189679286117943,
          "rotation": 0,
          "target": "3-upper-seating-area-2"
        },
        {
          "yaw": -1.4016043892964092,
          "pitch": 0.19519802609658932,
          "rotation": 0,
          "target": "0-main-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-upper-seating-area-2",
      "name": "Upper Seating Area 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3000,
      "initialViewParameters": {
        "yaw": -0.005558079857186371,
        "pitch": -0.02459777371137939,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.03529564854630607,
          "pitch": 0.16603520125605087,
          "rotation": 0,
          "target": "2-upper-seating-area"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "The Beer Café",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
