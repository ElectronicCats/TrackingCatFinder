const path = require("path");

const express = require("express");
const errorhandler = require("errorhandler");

const routes = require("../routes");
module.exports = app => {
  //Settings
  app.set("port", process.env.PORT || 3000);

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.set("views", path.join(__dirname, "../views"));
  app.set("view engine", "pug"); //View engine
  // routes
  routes(app);

  // static files
  app.use("/public", express.static(path.join(__dirname, "../public")));
  //errorhandlers
  if ("development" === app.get("env")) {
    app.use(errorhandler);
  }

  return app;
};
