const mongoose = require("mongoose");

const User = mongoose.model("User", {
  email: {
    unique: true,
    type: String,
    required: true,
  },
  account: {
    name: String,
    lastname: String,
  },
  token: String,
  hash: String,
  salt: String,
});

module.exports = User;
