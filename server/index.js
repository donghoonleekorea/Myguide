const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./router');
const session = require('express-session');

const corsConfig = {
  origin: 'http://localhost:3000',
  credentials: true,
};

app.use(cors(corsConfig));
app.use(express.json());

app.use(
  session({
    // the store property, if not specified, defaults to the in-memory store
    name: 'sid',
    saveUninitialized: false,
    resave: false,
    secret: 'not very secure..',
    cookie: {
      maxAge: 1000 * 60 * 60, // 1hr
      sameSite: true,
      httpOnly: false,
      // we would want to set secure=true in a production environment
      secure: false,
    },
  })
);

app.use(router);

app.listen(3010, (err) => {
  if (err) {
    console.log(`😞 Sorry, something went wrong [SERVER]! ${err}`);
  } else {
    console.log('🚀 Server (sessions) is running on http://localhost:3010!');
  }
});
