const express = require("express");
const router = express.Router();

const Comic = require("../models/Comic");
const Character = require("../models/Characters");

router.get("/characters", (req, res) => {
  res.json({ message: "Hello wolrd" });
});

module.exports = router;
