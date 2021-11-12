const express = require("express");
const blogController = require("../controller/blogController");
const router = express.Router();

router.route("/").get(blogController.getBlogs).post(blogController.createBlog);

router.route("/:id").get(blogController.getblog);

module.exports = router;
