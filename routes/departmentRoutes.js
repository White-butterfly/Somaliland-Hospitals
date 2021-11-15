const express = require("express");

const departmentController = require("../controller/departmentController");
const router = express.Router();

router
  .route("/")
  .get(departmentController.getDepartments) 
  .post(departmentController.createDepartment);

router 
  .route("/:id")
  .get(departmentController.getDepartment)
  //.get(departmentController.getoneDepert)
  .put(departmentController.updateDepartment)
  .delete(departmentController.deleteDepartment);

module.exports = router;
