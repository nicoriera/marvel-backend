const express = require("express");
const router = express.Router();
const qs = require("qs");
const axios = require("axios");

router.post("/favorites", async (req, res) => {
  const fav = req.fields.fav;

  let favTab = [[], []];
  try {
    for (let i = 0; i < fav.length; i++) {
      if (i === 0) {
        for (let j = 0; j < fav[i].length; j++) {
          const response = await axios.get(
            `https://lereacteur-marvel-api.herokuapp.com/character/${fav[i][j]}?apiKey=${process.env.API_KEY}`
          );

          favTab[0].push(response.data);
        }
      } else {
        for (let j = 0; j < fav[i].length; j++) {
          const response = await axios.get(
            `https://lereacteur-marvel-api.herokuapp.com/comic/${fav[i][j]}?apiKey=${process.env.API_KEY}`
          );

          favTab[1].push(response.data);
        }
      }
    }
    res.json(favTab);
  } catch (error) {
    console.log("error in favorites", error.response.data);
    console.log("favorites", error.message);
  }
});

module.exports = router;