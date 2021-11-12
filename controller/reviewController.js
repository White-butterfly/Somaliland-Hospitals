const Review = require("./../model/reviewModel");

exports.createReview = async (req, res) => {
  //code
  try {
    await Review.create(req.body);
    res.status(200).json({ message: "created" });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

exports.Allreviews = async (req, res) => {
  try {
    const reviews = await Review.find({});
    res.status(200).json({ reviews });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

exports.reviews = async (req, res) => {
  try {
    const reviews = await Review.find({ hospital: req.params.id }).populate(
      "hospital"
    );
    res.status(200).json({ reviews });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

exports.deleteReview = async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "review deleted",
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};
