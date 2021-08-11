const mongoose = require("mongoose");

const Comic = mongoose.model("Comic", {
  title: String,
  description: String,
  path: { type: mongoose.Schema.Types.Mixed, default: {} },
});

module.exports = Comic;
