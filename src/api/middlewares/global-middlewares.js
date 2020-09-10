const express = require("express");
const cors = require("cors");

//
exports.setGlobalMiddlewares = (app) => {
  app.use(cors());
  app.use(express.json({ extended: false }));
  app.use(express.urlencoded());
};
