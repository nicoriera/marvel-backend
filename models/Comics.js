const mongoose = require("mongoose");

const Comics = mongoose.model("Comic", {
  title: String,
  description: String,
});

module.exports = Comics;
