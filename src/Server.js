var https = require("https");
var http = require("http");
const bartAPI = (res, p) => {
  var options = {
    protocol:"https:",
    host: "api.bart.gov",
    path: p + "&key=MW9S-E7SL-26DU-VV8V&json=y",
  };
  console.log("Calling api: "+ options.protocol+"//www."+options.host+options.path);
  https
    .request(options, (response) => {
      var str = "";
      response.on("data", function (chunk) {
        str += chunk;
      });

      response.on("end", function () {
        console.log("Server got value" + str);
        res.write(str);
        res.end();
      });
    })
    .end();
};

const departureURL = /\/departures\/(.+)/;

//create a server object:
http
  .createServer(function (req, res) {
    if (req.url === "/stations" && req.method === "GET") {
      // http://api.bart.gov/docs/stn/stns.aspx
      bartAPI(res, "/api/stn.aspx?cmd=stns");
    } else if (req.url.match(departureURL) && req.method === "GET") {
      const match = req.url.match(departureURL);
      const id = match[1];
      // http://api.bart.gov/docs/etd/etd.aspx
      bartAPI(res, `/api/etd.aspx?cmd=etd&orig=${id}`);
    } else {
      //   res.status(404).send(`{"error":"true","errorMsg":"Unrecognized Path"}`);
      res.write("");
      res.end();
    }
  })
  .listen(8080);

  console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
  console.log("\n");
  console.log("Server Started!");
  console.log("\n");
  console.log("==================")
  console.log("Supported APIS:")
  console.log("==================")
  console.log("/stations")
  console.log("/departures/${stationId}")
