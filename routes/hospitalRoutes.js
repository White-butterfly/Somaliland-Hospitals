const express = require("express");
const hospitalController = require("../controller/hospitalController");
const multer = require("multer");
const path = require("path");

const router = express.Router();
const verifyToken = require("../middleware/auth");

//const verifyToken = require("../middleware/auth");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

router
  .route("/")
  .get(hospitalController.getHospital)
  .post(upload.single("image"), hospitalController.createHospital);

router
  .route("/:id")
  .get(hospitalController.getHospitall)
  .put(upload.single("images"), hospitalController.updateHospital)
  .delete(hospitalController.deleteHospital);

module.exports = router;
