const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true
});

app.get("/", (req, res) => {
  res.send("Hello Rocketseat!!!!!!");
});

app.listen(3000);
