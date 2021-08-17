const express = require("express");
const formidable = require("express-formidable");
const cors = require("cors");
const mongoose = require("mongoose");
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

const PORT = process.env.PORT || 5000;

const userRoutes = require("./routes/user");
app.use(userRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Bienvenue sur l'API Marvel" });
});

app.use(function (err, req, res, next) {
  res.json({ error: err.message });
});

app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});
