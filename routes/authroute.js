const express = require ('express');
const router= express.Router();

//load controllers
const {
    register,
    login,
    forgotpassword,
    resetpassword,

}= require('../controller/auth.controller.js')

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/forgotpassword').post(forgotpassword);
router.route('/resetpassword').put(resetpassword);



module.exports= router;