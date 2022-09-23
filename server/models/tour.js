const mongoose = require('../db');

const tourSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  creator: {
    name: String,
    description: String,
    img: String,
    tours: [],
  },
  img: {
    type: String,
    required: true,
  },
  audio: {
    type: String,
    required: true,
  },
  sampleAudio: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Tour', tourSchema);