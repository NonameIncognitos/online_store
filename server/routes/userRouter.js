const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');
const authoMiddleware = require('../middleware/authMiddleware')

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', authoMiddleware, userController.check);

module.exports = router;
