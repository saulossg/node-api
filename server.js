const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/nodeapi", {
  useNewUrlParser: true
});

requireDir("./src/models");

const Product = mongoose.model("Product");

app.get("/", (req, res) => {
  Product.create({
    title: "React Native",
    description: "Build native apps with REact",
    url: "http://github.com/facebook/react-native"
  });

  res.send("Hello Rocketseat!!!!!!");
});

app.listen(3000);
