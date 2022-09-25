const Tour = require('../models/tour');

const createNewTour = async (req, res) => {

  const { title } = req.body;
  let tour = await Tour.findOne({ title });
  if (tour) return res.status(409).send({ error: '409', message: 'Tour name already exists' });
  try {
    const newTour = new Tour(req.body);
    const tour = await newTour.save();
    res.status(201).send(tour);
  } catch (err) {
    console.log({err});
    res.status(400).send({ err, message: 'Could not create tour' });
  }

};

const getTours = async (req, res) => {
  try {
    const tours = await Tour.find({});
    res.status(200).send(tours);
  } catch (err) {
    res.status(500)
    res.send({ err, message: 'Error in USER-CONTROLLERS-TEST' });
  }
};

const deleteALL = async (req, res) => {
  
  try {
    const tours = await Tour.deleteMany({});
    res.status(200).send(tours);
  } catch (err) {
    res.status(500)
    res.send({ err, message: 'Error in USER-CONTROLLERS-TEST' });
  }
  
}


module.exports = { createNewTour, getTours, deleteALL };