const express = require("express");
const formidable = require("express-formidable");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
app.use(formidable());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/marvel-app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const comicRoutes = require("./routes/comic");
const charactersRoutes = require("./routes/characters");
app.use(comicRoutes);
app.use(charactersRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Bienvenue sur l'API Marvel" });
});

app.all("*", function (req, res) {
  res.json({ message: "Page not found" });
});

app.listen(3000, () => {
  console.log("Server has started");
});
