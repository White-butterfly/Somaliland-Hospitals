const express = require("express");
const appoinmentController = require("../controller/appoinmentController");
const router = express.Router();

router
  .route("/")
  .get(appoinmentController.getAppoinment)
  .post(appoinmentController.createAppoinment)

router
  .route("/:id")
   //.get(appoinmentController.getAppoinmentById)
  .delete(appoinmentController.deleteApp)

module.exports = router;
