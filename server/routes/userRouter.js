const Router = require('express');
const router = new Router();
const userContoller = require('../controllers/userController')

router.post('/registration', userContoller.regisrtation)
router.post('/login', userContoller.login)
router.get('/auth', userContoller.check)

module.exports = router