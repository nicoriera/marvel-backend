const express = require("express");
const router = express.Router();

const Comic = require("../models/Comics");
const Character = require("../models/Characters");

router.get("/comics", async (req, res) => {
  res.json("Hola" || Comic);
});

router.get("/comics/:characterId", (req, res) => {
  res.json("Hola" || Comic);
});

module.exports = router;
