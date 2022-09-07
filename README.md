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
"?xml":{
"@version":"1.0",
"@encoding":"utf-8"
},
"root":{
"@id":"1",
"uri":{
"#cdata-section":"http://api.bart.gov/api/etd.aspx?cmd=etd&orig=RICH&json=y"
},
"date":"08/14/2017",
"time":"10:20:31 AM PDT",
"station":[
{
"name":"Richmond",
"abbr":"RICH",
"etd":[
{
"destination":"Fremont",
"abbreviation":"FRMT",
"limited":"0",
"estimate":[
{
"minutes":"1",
"platform":"2",
"direction":"South",
"length":"4",
"color":"ORANGE",
"hexcolor":"#ff9933",
"bikeflag":"1",
"delay":"238"
},
{
"minutes":"13",
"platform":"2",
"direction":"South",
"length":"4",
"color":"ORANGE",
"hexcolor":"#ff9933",
"bikeflag":"1",
"delay":"0"
},
{
"minutes":"28",
"platform":"2",
"direction":"South",
"length":"4",
"color":"ORANGE",
"hexcolor":"#ff9933",
"bikeflag":"1",
"delay":"0"
}
]
},
{
"destination":"Millbrae",
"abbreviation":"MLBR",
"limited":"0",
"estimate":[
{
"minutes":"6",
"platform":"2",
"direction":"South",
"length":"4",
"color":"RED",
"hexcolor":"#ff0000",
"bikeflag":"1",
"delay":"0"
},
{
"minutes":"21",
"platform":"2",
"direction":"South",
"length":"5",
"color":"RED",
"hexcolor":"#ff0000",
"bikeflag":"1",
"delay":"0"
},
{
"minutes":"36",
"platform":"2",
"direction":"South",
"length":"5",
"color":"RED",
"hexcolor":"#ff0000",
"bikeflag":"1",
"delay":"0"
}
]
}
]
}
],
"message":""
}
}
```
### `/departures/${stationId}`

Returns a list of "estimated time of departure" from now, for a given station.

JSON Sample
```
{
"?xml":{
"@version":"1.0",
"@encoding":"utf-8"
},
"root":{
"@id":"1",
"uri":{
"#cdata-section":"http://api.bart.gov/api/etd.aspx?cmd=etd&orig=RICH&json=y"
},
"date":"08/14/2017",
"time":"10:20:31 AM PDT",
"station":[
{
"name":"Richmond",
"abbr":"RICH",
"etd":[
{
"destination":"Fremont",
"abbreviation":"FRMT",
"limited":"0",
"estimate":[
{
"minutes":"1",
"platform":"2",
"direction":"South",
"length":"4",
"color":"ORANGE",
"hexcolor":"#ff9933",
"bikeflag":"1",
"delay":"238"
},
{
"minutes":"13",
"platform":"2",
"direction":"South",
"length":"4",
"color":"ORANGE",
"hexcolor":"#ff9933",
"bikeflag":"1",
"delay":"0"
},
{
"minutes":"28",
"platform":"2",
"direction":"South",
"length":"4",
"color":"ORANGE",
"hexcolor":"#ff9933",
"bikeflag":"1",
"delay":"0"
}
]
},
{
"destination":"Millbrae",
"abbreviation":"MLBR",
"limited":"0",
"estimate":[
{
"minutes":"6",
"platform":"2",
"direction":"South",
"length":"4",
"color":"RED",
"hexcolor":"#ff0000",
"bikeflag":"1",
"delay":"0"
},
{
"minutes":"21",
"platform":"2",
"direction":"South",
"length":"5",
"color":"RED",
"hexcolor":"#ff0000",
"bikeflag":"1",
"delay":"0"
},
{
"minutes":"36",
"platform":"2",
"direction":"South",
"length":"5",
"color":"RED",
"hexcolor":"#ff0000",
"bikeflag":"1",
"delay":"0"
}
]
}
]
}
],
"message":""
}
}
```
