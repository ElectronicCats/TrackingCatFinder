const express = require("express");
const router = express.Router();

const home = require("../controllers/index.controllers");

module.exports = app => {
  /**
   * ROUTES
   */

  router.get("/", home.index);
  router.get("/data", home.getData /* * FUNCTION CONTROLLER -- getData */);

  /*
    WE CAN CREATE MORE ROUTES WITH THE FOLLOWING HTTP METHODS  
    ?@GET
    ?@POST
    ?@DELETE
    ?@PUT
    etc.. 

    * * example: 
    * router.post("/newRoute", (callback function controller) => { 
    *   return response; 
    * });
    * 
  */

  app.use(router);
};
