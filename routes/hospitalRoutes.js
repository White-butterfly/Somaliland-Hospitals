const express = require("express");
const hospitalController = require("../controller/hospitalController");
const path = require("path");
const router = express.Router();

router
  .route("/")
  .get(hospitalController.getHospital)
  .post(hospitalController.createHospital);

router
  .route("/:id")
  .get(hospitalController.getHospitall)
  .put(hospitalController.updateHospital)
  .delete(hospitalController.deleteHospital);

module.exports = router;
