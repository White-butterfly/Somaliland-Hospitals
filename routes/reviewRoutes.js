const express = require("express");

const Router = express.Router();

const reviewController = require("../controller/reviewController");

Router.route("/")
  .post(reviewController.createReview)
  .get(reviewController.Allreviews);

Router.route("/:id")
  .get(reviewController.reviews)
  .delete(reviewController.deleteReview);
module.exports = Router;
