const express = require("express");

const Router = express.Router();

const contactController = require("../controller/contactController");

Router.route("/").post(contactController.createContact);

Router.route("/:id").get(contactController.contacts);
module.exports = Router;
