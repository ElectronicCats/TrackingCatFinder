const express = require("express");
const config = require("./server/config");

const app = config(express());

// Start srv
app.listen(app.get("port"), () => {
  console.log("Server run in port: ", app.get("port"));
});
