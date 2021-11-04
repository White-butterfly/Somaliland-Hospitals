const express = require("express");

const departmentController = require("../controller/departmentController");
const router = express.Router();
 
router
  .route("/")
  .get(departmentController.getDepartments)
  .post(departmentController.createDepartment);

router
<<<<<<< HEAD
  .route("/:id")
  .get(departmentController.getDepartment)
  //.get(departmentController.getoneDepert)
  .put(departmentController.updateDepartment);
=======
.route("/:id")
.get(departmentController.getDepartment)
.delete(departmentController.deleteDepartment);
>>>>>>> 73ec41c9d261165f9b28cbf1b47d480eb6bd1ff0

module.exports = router;
