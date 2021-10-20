
const express = require('express');
 
const userController= require ('../controller/user-controller');

const router = express.Router();

router
.route('/')
.get (userController.getUser)
.post(userController.createuser)



router
.route('/:id')
.get(userController.getUserr)
// .post(userController.updateUser)
.delete(userController.deleteUserr)

router
.route('/updateUser')
.post(userController.updateUser)

router.post('updateUser', userController.updateUser)



module.exports= router;

