const express = require('express');
const app = express();
const cors = require('cors');
const session = require('express-session');
const router = require('./router');

const corsConfig = {
  origin: 'http://localhost:3000',
  credentials: true,
};

app.use(cors(corsConfig));
app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.log('Server is running on http:localhost:3000');
});
