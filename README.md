This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Install and Run

In the project directory, you can run:

### `1) npm install`

Installs dependencies

### `2) node src/Server.js`


Starts a simple node server to proxy requests to BART API.


### `3) npm start`

Launches the app at http://localhost:3000

## `API DOCS`

### `/stations`

Returns a list of all the train stations in the BART system.

JSON Sample
```
{
  "?xml": {
    "@version": "1.0",
    "@encoding": "utf-8"
  },
  "root": {
    "uri": {
      "#cdata-section": "http://api.bart.gov/api/stn.aspx?cmd=stns&json=y"
    },
    "stations": {
      "station": [
        {
          "name": "12th St. Oakland City Center",
          "abbr": "12TH",
          "gtfs_latitude": "37.803768",
          "gtfs_longitude": "-122.271450",
          "address": "1245 Broadway",
          "city": "Oakland",
          "county": "alameda",
          "state": "CA",
          "zipcode": "94612"
        },
        {
          "name": "Warm Springs / South Fremont",
          "abbr": "WARM",
          "gtfs_latitude": "37.502171",
          "gtfs_longitude": "-121.939313",
          "address": "45193 Warm Springs Blvd",
          "city": "Fremont",
          "county": "alameda",
          "state": "CA",
          "zipcode": "94539"
        }
      ]
    },
    "message": ""
  }
}
```
### `/departures/${stationId}`

Returns a list of "estimated time of departure" from now, for a given station.

JSON Sample
```
{
  "?xml": {
    "@version": "1.0",
    "@encoding": "utf-8"
  },
  "root": {
    "@id": "1",
    "uri": {
      "#cdata-section": "https://api.bart.gov/api/etd.aspx?cmd=etd&orig=RICH&json=y"
    },
    "date": "01/20/2021",
    "time": "08:13:44 AM PDT",
    "station": [
      {
        "name": "Richmond",
        "abbr": "RICH",
        "etd": [
          {
            "destination": "Fremont",
            "abbreviation": "FRMT",
            "limited": "0",
            "estimate": [
              {
                "minutes": "1",
                "platform": "2",
                "direction": "South",
                "length": "4",
                "color": "ORANGE",
                "hexcolor": "#ff9933",
                "bikeflag": "1",
                "delay": "238",
                "cancelflag": "1",
                "dynamicflag": "0"
              },
              {
                "minutes": "13",
                "platform": "2",
                "direction": "South",
                "length": "4",
                "color": "ORANGE",
                "hexcolor": "#ff9933",
                "bikeflag": "1",
                "delay": "0",
                "cancelflag": "0",
                "dynamicflag": "1"
              },
              {
                "minutes": "28",
                "platform": "2",
                "direction": "South",
                "length": "4",
                "color": "ORANGE",
                "hexcolor": "#ff9933",
                "bikeflag": "1",
                "delay": "0",
                "cancelflag": "0",
                "dynamicflag": "0"
              }
            ]
          },
          {
            "destination": "Millbrae",
            "abbreviation": "MLBR",
            "limited": "0",
            "estimate": [
              {
                "minutes": "6",
                "platform": "2",
                "direction": "South",
                "length": "4",
                "color": "RED",
                "hexcolor": "#ff0000",
                "bikeflag": "1",
                "delay": "0",
                "cancelflag": "0",
                "dynamicflag": "0"
              },
              {
                "minutes": "21",
                "platform": "2",
                "direction": "South",
                "length": "5",
                "color": "RED",
                "hexcolor": "#ff0000",
                "bikeflag": "1",
                "delay": "0",
                "cancelflag": "0",
                "dynamicflag": "0"
              },
              {
                "minutes": "36",
                "platform": "2",
                "direction": "South",
                "length": "5",
                "color": "RED",
                "hexcolor": "#ff0000",
                "bikeflag": "1",
                "delay": "0",
                "cancelflag": "0",
                "dynamicflag": "0"
              }
            ]
          }
        ]
      }
    ],
    "message": ""
  }
}
```
