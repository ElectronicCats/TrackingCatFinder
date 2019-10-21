const express = require("express");
const errorhandler = require("errorhandler");

const routes = require("../routes");
module.exports = app => {
  //Settings
  app.set("port", process.env.PORT || 3000);

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  // routes
  routes(app);

  // static files
  //app.use("/public", express.static(path.join(__dirname, "../public")));

  //errorhandlers
  if ("development" === app.get("env")) {
    app.use(errorhandler);
  }

  return app;
};
