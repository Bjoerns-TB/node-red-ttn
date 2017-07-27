[
    {
        "id": "40886d4f.dcf754",
        "type": "tab",
        "label": "TTN"
    },
    {
        "id": "f28bce92.c639",
        "type": "mqtt in",
        "z": "40886d4f.dcf754",
        "name": "MQTT Node - TheThingsNetwork",
        "topic": "#",
        "qos": "2",
        "broker": "3468aac6.7ef946",
        "x": 135,
        "y": 28,
        "wires": [
            [
                "1217f54a.c9804b"
            ]
        ]
    },
    {
        "id": "1217f54a.c9804b",
        "type": "function",
        "z": "40886d4f.dcf754",
        "name": "Decrypt Payload",
        "func": "//convert to ascii\nvar msg1 = { payload: msg.payload.length };\nmsg1.payload = JSON.parse(msg.payload);\nmsg1.payload = new Buffer(msg1.payload.payload_raw, 'base64').toString('ascii');\n\n//split payload\nvar msg2 = {};\nvar msg3 = {};\nmsg2.payload = msg1.payload.substr(0,4);\nmsg3.payload = msg1.payload.substr(4,4);\nmsg2.payload = parseFloat(msg2.payload);\nmsg3.payload = parseFloat(msg3.payload);\nreturn [ msg2, msg3];\n\n",
        "outputs": "2",
        "noerr": 0,
        "x": 383,
        "y": 28,
        "wires": [
            [
                "2495852c.0acd1a",
                "30140d32.3504b2"
            ],
            [
                "cf63c4a0.1bfc98"
            ]
        ]
    },
    {
        "id": "2495852c.0acd1a",
        "type": "ui_gauge",
        "z": "40886d4f.dcf754",
        "name": "",
        "group": "ea3d11d5.f2602",
        "order": 0,
        "width": 0,
        "height": 0,
        "gtype": "gage",
        "title": "Temperatur",
        "label": "°C",
        "format": "{{value}}",
        "min": 0,
        "max": "100",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "25",
        "seg2": "30",
        "x": 663,
        "y": 26,
        "wires": []
    },
    {
        "id": "cf63c4a0.1bfc98",
        "type": "ui_gauge",
        "z": "40886d4f.dcf754",
        "name": "",
        "group": "ea3d11d5.f2602",
        "order": 0,
        "width": 0,
        "height": 0,
        "gtype": "gage",
        "title": "Luftfeuchtigkeit",
        "label": "%",
        "format": "{{value}}",
        "min": 0,
        "max": "100",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "60",
        "seg2": "70",
        "x": 673,
        "y": 97,
        "wires": []
    },
    {
        "id": "30140d32.3504b2",
        "type": "ui_chart",
        "z": "40886d4f.dcf754",
        "name": "",
        "group": "ea3d11d5.f2602",
        "order": 0,
        "width": 0,
        "height": 0,
        "label": "chart",
        "chartType": "line",
        "legend": "false",
        "xformat": "HH:mm:ss",
        "interpolate": "linear",
        "nodata": "",
        "dot": false,
        "ymin": "",
        "ymax": "",
        "removeOlder": "12",
        "removeOlderPoints": "",
        "removeOlderUnit": "3600",
        "cutout": 0,
        "useOneColor": false,
        "colors": [
            "#1f77b4",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "x": 642,
        "y": 61,
        "wires": [
            [],
            []
        ]
    },
    {
        "id": "3468aac6.7ef946",
        "type": "mqtt-broker",
        "z": "",
        "broker": "eu.thethings.network",
        "port": "1883",
        "clientid": "",
        "usetls": false,
        "compatmode": true,
        "keepalive": "60",
        "cleansession": true,
        "willTopic": "",
        "willQos": "0",
        "willPayload": "",
        "birthTopic": "",
        "birthQos": "0",
        "birthPayload": ""
    },
    {
        "id": "ea3d11d5.f2602",
        "type": "ui_group",
        "name": "Group 1",
        "tab": "88787c3a.10204",
        "order": 1,
        "disp": true,
        "width": 6
    },
    {
        "id": "88787c3a.10204",
        "type": "ui_tab",
        "z": "",
        "name": "TTN",
        "icon": "dashboard",
        "order": 4
    }
]
