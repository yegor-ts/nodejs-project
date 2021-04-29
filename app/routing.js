const userController = require('./modules/user/user.controller');

const Router = require('./lib/Router');

const router = new Router();

router.post('/user', userController.signupUser);

router.get('/user', userController.getAllUsers);

router.get('/user/:id', userController.getUser);

router.patch('/user/:id', userController.updateUser);

router.delete('/user/:id', userController.deleteUser);

module.exports = router;