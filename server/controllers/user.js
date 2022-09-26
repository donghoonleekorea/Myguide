const bcrypt = require('bcrypt');
const User = require('../models/user');

const register = async (req, res) => {

  const { email, password } = req.body;
  let user = await User.findOne({ email });
  if (user) return res.status(409).send({ error: '409', message: 'User already exists' });
  try {
    if (password === '') throw new Error();
    const hash = await bcrypt.hash(password, 12);
    const newUser = new User({ ...req.body, password: hash });
    const user = await newUser.save();
    req.session.uid = user._id; // What exactly do this statement? creating uniq id for user session?
    res.status(201).send(user);
  } catch (err) {
    console.log({err});
    res.status(400).send({ err, message: 'Could not create user' });
  }

};

const test = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (err) {
    res.status(500)
    res.send({ err, message: 'Error in USER-CONTROLLERS-TEST' });
  }
};

const login = async (req, res) => {

  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    // console.log({user});
    const validatedPass = await bcrypt.compare(password, user.password);
    if (!validatedPass) throw new Error();
    req.session.uid = user._id.toString();
    console.log(req.session.uid.toString());
    res.status(200).send(user);
  } catch (err) {
    res.status(401).send({ error: '401', message: 'Username or password is incorrect' });
  }

};

const profile = (req, res) => {
  console.log('user: ', req.user);
  try {
    const { _id, firstName, lastName } = req.user;
    const user = { _id, firstName, lastName };
    res.status(200).send(user);
  } catch (err) {
    res.status(404).send({ err, message: 'User not found' });
  }

};

// const logout = (req, res) => {

//   req.session.destroy((err) => {
//     if (err) {
//       res.status(500).send({ err, message: 'Could not log out, please try again' });
//     } else {
//       res.clearCookie('sid');
//       res.status(200).send({ message: 'Logout successful' });
//     }
//   })

// };



module.exports = { register, test, login, profile };