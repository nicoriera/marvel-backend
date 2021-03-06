const express = require("express");
const router = express.Router();
const qs = require("qs");
const axios = require("axios");

// Route get characters
router.get("/characters", async (req, res) => {
  console.log("route: /characters");
  console.log(req.query);
  const { limit, skip, name } = req.query;
  let queryParams = qs.stringify({
    limit: limit,
    skip: skip,
    name: name,
    apiKey: process.env.API_KEY_MARVEL,
  });
  try {
    let response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?${queryParams}`
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error.message);
  }
});

router.get("/comics/:characterId", async (req, res) => {
  try {
    const characterId = req.params.characterId;

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${characterId}?apiKey=${process.env.API_KEY_MARVEL}`
    );
    res.json(response.data);
  } catch (error) {
    console.log("characterId/comics", error.message);
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
