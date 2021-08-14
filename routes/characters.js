const express = require("express");
const router = express.Router();

const Comic = require("../models/Comics");
const Character = require("../models/Characters");

router.post("/characters", async (req, res) => {
  try {
    const name = new RegExp(req.fields.name, "i");
    const existingCharacter = await Character.findOne({ name: name });

    if (existingCharacter === null) {
      const newCharacter = new Character({
        name: req.fields.name,
        desscritption: req.fields.desscritption,
      });

      await newCharacter.save();
      res.json(newCharacter);
    } else {
      res.status(400).json({
        error: {
          message: "Drug already exists",
        },
      });
    }
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
