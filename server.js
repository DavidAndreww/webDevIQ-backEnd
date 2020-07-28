// creates top level Express function
const express = require("express");
const app = express();
// loads enivornment variables from .env file to process.env
const dotenv = require("dotenv").config();

const cors = require("cors");
const colors = require("colors");
const PORT = process.env.PORT || 3030;

const userRouter = require('./routes/userRouter')
const quizRouter = require('./routes/quizRouter')

// parses incoming requests with JSON payloads
app.use(express.json());
// serves static files (HTML/Front End)
app.use(express.static('public'))

// sets parameters for cors accessibility
let corsOptions = {
  // allow examples only from our URL
  origin: 'http://localhost:3030', // whatever our domain is
  // provide status code for successful requests
  optionsSuccessStatus: 200
}
// enables cors requests for options stated in 
app.use(cors())
//

// route for user login/signup controllers
app.use('/', userRouter)
// route to handle quiz related controllers
app.use('/quiz', quizRouter)

// UNIX socket listening for connections on path localhost:port
app.listen(PORT, () => {
  console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT.yellow}`.blue.bold);
});
