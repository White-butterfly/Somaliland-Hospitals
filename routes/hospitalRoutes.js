const express = require("express");
const hospitalController = require("../controller/hospitalController");
const router = express.Router();
const verifyToken = require("../middleware/auth");

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
