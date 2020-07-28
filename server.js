const express = require("express");
const app = express();
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
// 
app.use(cors())
//
let corsOptions = {
  origin: 'http://localhost:3030', // whatever our domain is
  optionsSuccessStatus: 200
}

// route for user login/signup controllers
app.use('/', userRouter)
// route 
app.use('/questions', quizRouter)

// 
app.listen(PORT, () => {
  console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT.yellow}`.blue.bold);
});
