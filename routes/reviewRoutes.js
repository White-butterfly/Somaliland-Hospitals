const express = require("express");

const Router = express.Router();

const reviewController = require("../controller/reviewController");


Router.route("/").post(reviewController.createReview);

Router.route("/:id").get(reviewController.reviews);
module.exports = Router;