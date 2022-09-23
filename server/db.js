const mongoose = require('mongoose');

mongoose.connect(
  `mongodb://localhost:27017/myguide`, 
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(`😞 Sorry, something went wrong [DB CONNECTION]! ${err}`);
    } else {
      console.log(`🦆 Database connected @ port 27017!`);
    }
  } 
);

module.exports = mongoose;