const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const colors = require("colors");
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("fresh data here, get it while it's hot!!");
});

app.listen(PORT, () => {
  console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT.yellow}`.blue.bold);
});
