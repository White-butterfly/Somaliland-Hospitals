const express = require("express");
const userController = require("../controller/userController");

const Router = express.Router();

Router.route("/").post(userController.saveUser).get(userController.getUsers);

Router.route("/signUp").post(userController.loginUser);

module.exports = Router;
