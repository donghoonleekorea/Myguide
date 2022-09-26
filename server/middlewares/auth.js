const User = require('../models/user');

const authMiddleware = async (req, res, next) => {

  try {
    // console.log('SESSION : ',req.session)
    const { uid } = req.session;
    console.log('UID : ', uid)
    const user = await User.findOne({ _id: uid });
    if (!user) throw new Error();
    req.user = user;
    next();
  } catch (err) {
    res.status(401);
  }

};

module.exports = authMiddleware;