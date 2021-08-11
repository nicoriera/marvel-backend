const express = require("express");
const router = express.Router();

const Comic = require("../models/Comic");
const Character = require("../models/Characters");

router.get("/comics", (req, res) => {
  res.json({ message: "Salut" });
});

router.get("/comics/:characterId", (req, res) => {
  res.json({ message: "Hola" });
});

module.exports = router;
