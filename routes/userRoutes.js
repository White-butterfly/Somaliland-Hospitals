const express = require("express");
const userController = require("../controller/userController");

const Router = express.Router();

Router.route("/").post(userController.saveUser);

Router.route("/signUp").post(userController.loginUser);

module.exports = Router;
