const axios = require("axios");

const ctrl = {};

ctrl.index = async (req, res) => {
  let data = axios
    .get("http://192.168.4.1/data")
    .then(result => {
      console.log(result.data);
      res.render("index", {
        title: "example - cat finder",
        message: "Tracking Cat Finder",
        data: result.data
      });
    })
    .catch(err => {
      res.render("index", {
        title: "example - cat finder",
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
