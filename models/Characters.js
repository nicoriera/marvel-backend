const mongoose = require("mongoose");

const Characters = mongoose.model("Character", {
  name: String,
  description: String,
});

module.exports = Characters;
