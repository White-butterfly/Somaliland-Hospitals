const express = require("express");
const hospitalController = require("../controller/hospitalController");
const multer = require("multer");
const path = require("path");

const router = express.Router();
<<<<<<< HEAD
const verifyToken = require("../middleware/auth");
const multer = require("multer");
const path = require("path");

=======


//const verifyToken = require("../middleware/auth");
>>>>>>> 73ec41c9d261165f9b28cbf1b47d480eb6bd1ff0
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
<<<<<<< HEAD
    );
  },
});

const upload = multer({ storage: storage });
=======
    );},});
    

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//       cb(null, 'assets/uploads')
//   },
//   filename: function (req, file, cb) {
//       // You could rename the file name
//       // cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))

//       // You could use the original name
//       cb(null, file.originalname)
//   }
// });

var upload = multer({storage: storage})
>>>>>>> 73ec41c9d261165f9b28cbf1b47d480eb6bd1ff0

router
  .route("/")
  .get(hospitalController.getHospital)
  .post(upload.single("image") , hospitalController.createHospital);

router
  .route("/:id")
  .get(hospitalController.getHospitall)
  .put(upload.single("images"), hospitalController.updateHospital)
  .delete(hospitalController.deleteHospital);




module.exports = router;
