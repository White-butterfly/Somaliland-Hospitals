const express = require("express");

const Router = express.Router();

const contactController = require("../controller/contactController");

Router.route("/")

  .post(contactController.createContact)
  .get(contactController.getcontact);

Router.route("/:id")
  .get(contactController.getContactt)
  .delete(contactController.deleteCon);

module.exports = Router;
