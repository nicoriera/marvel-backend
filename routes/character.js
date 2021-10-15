const express = require("express");
const router = express.Router();
const qs = require("qs");
const axios = require("axios");

// Route get characters
router.get("/comics/:characterId", async (req, res) => {
  console.log("route: /comics/:characterId");
  console.log(req.query);
  const { limit, skip, name } = req.query;
  let queryParams = qs.stringify({
    apiKey: process.env.API_KEY_MARVEL,
  });
  try {
    const characterId = req.params.characterId;
    let response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${characterId}?${queryParams}`
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.log("characterId/comics", error.message);
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
