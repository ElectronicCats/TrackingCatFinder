const axios = require("axios");

const ctrl = {};

ctrl.index = async (req, res) => {
  let data = axios
    .get("http://192.168.4.1/data")
    .then(result => {
      let data = result.data.substring(58, result.data.length - 6);
      let json = JSON.parse(JsonOnSring(data));
      console.log(json["Sensores"])
      let datajson = {
        title: "example - cat finder",
        message: "Tracking Cat Finder",
        humidity: json["Sensores"][0][1],
        pressure: json["Sensores"][0][2],
        temp: json["Sensores"][0][3], // C~
        co2: json["Sensores"][0][4],
        tvoc: json["Sensores"][0][5],
        ax: json["Sensores"][0][6], //Acelerometro
        ay: json["Sensores"][0][7],
        az: json["Sensores"][0][8],
        gx: json["Sensores"][0][9], //Giroscopio
        gy: json["Sensores"][0][10],
        gz: json["Sensores"][0][11]
      };
      res.render("index", datajson);
    })
    .catch(err => {
      res.render("index", {
        title: "error - cat finder",
        message: "Tracking Cat Finder",
        data: err.message
      });
    });

  function JsonOnSring(dataJson) {
    let objJson = '{ "Sensores" : [ {';
    let pivote = 0,
      i = -1;
    let value;
    let props = 1;
    let flag = false;
    while (pivote >= 0) {
      pivote = dataJson.indexOf(",", i + 1);
      if (pivote == -1) {
        flag = true;
        value = dataJson.substring(i + 1, dataJson.length);
      }

      if (!flag) value = dataJson.substring(i + 1, pivote);

      objJson += `
           "${props}": "${value}",
        `;

      i = pivote;
      props++;

      if (flag) break;
    }

    objJson += '"FILTER": "ON" } ]}';
    return objJson;
  }
};

module.exports = ctrl;
