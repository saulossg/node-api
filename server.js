const express = require("express");
const requireDir = require("require-dir");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true
});

requireDir("./src/models");

const Product = mongoose.model("Product");

app.use("/api", require("./src/routes"));

app.listen(3001);
