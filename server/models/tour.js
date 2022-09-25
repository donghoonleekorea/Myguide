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
  img: {
    type: String,
    required: true,
  },
  audio: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Tour', tourSchema);

// {
//   "title": "visita_la_sagrada_familia",
//   "country": "spain",
//   "city": "barcelona",
//   "img": "sagradaFamilia",
//   "audio": "sagradaFamilia",
//   "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
// }


// {
//   "_id": "632f20e374587dbbca6151bc",
//   "title": "Paris and its Effiel tower",
//   "country": "france",
//   "city": "paris",
//   "img": "torreEffiel",
//   "audio": "torreEffiel",
//   "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//   "__v": 0
// },
// {
//   "_id": "632f217474587dbbca6151c0",
//   "title": "Carpe Diem in Firenze",
//   "country": "italy",
//   "city": "firenze",
//   "img": "duomoFirenze",
//   "audio": "duomoFirenze",
//   "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
//   "__v": 0
// },
// {
//   "_id": "632f21b974587dbbca6151c4",
//   "title": "Battle in Coloseum",
//   "country": "italy",
//   "city": "rome",
//   "img": "coloseum",
//   "audio": "coloseum",
//   "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//   "__v": 0
// }