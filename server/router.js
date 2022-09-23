const router = require('express').Router();
const userController = require('./controllers/user');
// const tourController = require('./controllers/tour');
const authMiddleware = require('./middlewares/auth');
const user = require('./models/user');

router.post('/register', userController.register);
router.get('/test', userController.test);
router.post('/login', userController.login);
router.post('/logout', authMiddleware, userController.logout);
router.get('/profile', authMiddleware, userController.profile);

module.exports = router;