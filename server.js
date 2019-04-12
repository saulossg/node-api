const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

const app = express();

mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true
});

requireDir("./src/models");

app.get("/", (req, res) => {
  res.send("Hello Rocketseat!!!!!!");
});

app.listen(3000);
