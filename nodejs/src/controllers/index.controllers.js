const path = require("path");
const axios = require("axios");
const ctrl = {};

ctrl.index = async (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
};

ctrl.getData = async (req, res) => {
  const data = await axios
    .get("http://192.168.4.1/data")
    .then(function(response) {
      console.log(response);
      return response.data;
    })
    .catch(function(error) {
      console.log(error);
    });

  const obj = {
    data
  };
  res.send(obj);
};

module.exports = ctrl;
