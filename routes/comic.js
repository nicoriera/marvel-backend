const express = require("express");
const router = express.Router();
const qs = require("qs");
const axios = require("axios");

router.get("/comics", async (req, res) => {
  console.log("route: /comics");
  console.log(req.query);
  const { limit, skip, title } = req.query;
  let queryParams = qs.stringify({
    limit: limit,
    skip: skip,
    title: title,
    apiKey: process.env.API_KEY_MARVEL,
  });
  try {
    let response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?${queryParams}`
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;
