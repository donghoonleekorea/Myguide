const mongoose = require('mongoose');

mongoose.connect(
  `mongodb://localhost:27017/myguide`, 
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(`😞 Sorry, something went wrong! ${err}`);
    } else {
      console.log(`🦆 Database (sessions) connected @ port 27017!`);
    }
  } 
);

module.exports = mongoose;