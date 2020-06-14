const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const colors = require("colors");
const PORT = process.env.PORT || 3030;
// used for auth0
const session = require('express-session')
// load passport
const passport = require('passport')
const Auth0Strategy = require('passport-auth0')

// configuring express-session
let sess = {
  secret: 'helloGoodbye',
  cookie: {},
  resave: false,
  saveUninitialized: true
}

if (app.get('env') === 'production') {
  // Use secure cookies in production (requires SSL/TLS)
  sess.cookie.secure = true;

  // Uncomment the line below if your application is behind a proxy (like on Heroku)
  // or if you're encountering the error message:
  // "Unable to verify authorization request state"
  // app.set('trust proxy', 1);
}

app.use(session(sess));

// configure passport to use Auth0
const strategy = new Auth0Strategy(
  {
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    callbackURL:
      process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/callback'
  },
  function (accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    return done(null, profile);
  }
);

passport.use(strategy);

app.use(passport.initialize());
app.use(passport.session());


// routes for users and questions
const userRouter = require('./routes/userRouter')
const questionsRouter = require('./routes/questionsRouter')

app.use(express.json());
// app.use(cors())

let corsOptions = {
  origin: 'http://localhost:3030', // whatever our domain is
  optionsSuccessStatus: 200
}

app.use('/', userRouter)
app.use('/questions', questionsRouter)

app.listen(PORT, () => {
  console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT.yellow}`.blue.bold);
});
