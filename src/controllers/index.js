const axios = require("axios");

const ctrl = {};

ctrl.index = async (req, res) => {
  let data = axios.get("http://192.168.1.4:80/data", res => {
    return res;
  });

  res.render("index", { title: "example - cat finder", message: "example" });
};

module.exports = ctrl;
