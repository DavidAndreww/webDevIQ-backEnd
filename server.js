const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const colors = require("colors");
const PORT = process.env.PORT || 3030;

const userRouter = require('./routes/userRouter')

app.use(express.json());
// app.use(cors())

let corsOptions = {
  origin: 'http://localhost:3030', // whatever our domain is
  optionsSuccessStatus: 200
}

app.use('/', userRouter)

app.listen(PORT, () => {
  console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT.yellow}`.blue.bold);
});
