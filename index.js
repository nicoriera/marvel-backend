const express = require("express");
const formidable = require("express-formidable");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
app.use(formidable());
app.use(cors());

require("dotenv").config();

mongoose.connect("mongodb://localhost:27017/marvel-app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("connecté à Mongoose");
});

const comicsRoutes = require("./routes/comics");
const charactersRoutes = require("./routes/characters");
app.use(comicsRoutes);
app.use(charactersRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Bienvenue sur l'API Marvel" });
});

app.use(function (err, req, res, next) {
  res.json({ error: err.message });
});

app.listen(process.env.PORT, () => {
  console.log("Server has started");
});
