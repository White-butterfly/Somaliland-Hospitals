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
  .delete(departmentController.deleteDepartment)
  .put(departmentController.updateDepartment);
//.get(departmentController.getoneDepert);

module.exports = router;
