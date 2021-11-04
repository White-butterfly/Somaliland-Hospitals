const express = require("express");
const blogController = require("../controller/blogController");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, ".././images");
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
  .get(blogController.getBlogs)
  .post(upload.single("image"), blogController.createBlog);

router.route("/:id").get(blogController.getblog);

module.exports = router;
