const express = require("express");
const mongoose = require("mongoose");
const formidable = require("express-formidable");
var cors = require("cors");

const app = express();
app.use(formidable());
app.use(cors());

require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("connecté à Mongoose");
});

const PORT = process.env.PORT;

const userRoutes = require("./routes/user");
const characterRoutes = require("./routes/character");
const comicRoutes = require("./routes/comic");
const favoritesRoutes = require("./routes/favorites");
app.use(userRoutes);
app.use(characterRoutes);
app.use(comicRoutes);
app.use(favoritesRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Marvel API" });
});

app.all("*", (req, res) => {
  console.log("route: /all routes");
  res.status(404).json({ message: "Page not found" });
});

app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});
