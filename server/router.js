const router = require('express').Router();
const userController = require('./controllers/user');
const tourController = require('./controllers/tour');
const authMiddleware = require('./middlewares/auth');

router.post('/register', userController.register);
router.get('/test', userController.test);
router.post('/login', userController.login);
router.post('/logout', authMiddleware, userController.logout);
router.get('/profile', authMiddleware, userController.profile);
router.put('/updateUserTours', userController.updateUserTours);

router.post('/createNewTour', tourController.createNewTour);
router.get('/getTours', tourController.getTours);
router.delete('/deleteAll', tourController.deleteALL);

module.exports = router;