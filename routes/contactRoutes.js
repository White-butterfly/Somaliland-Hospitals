const express = require("express");

const Router = express.Router();

const contactController = require("../controller/contactController");
const verifyToken = require("../middleware/auth");

Router.route("/").post(verifyToken, contactController.createContact);

Router.route("/:id").get(contactController.contacts);
module.exports = Router;
