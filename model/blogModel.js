const mongoose = require("mongoose");
const blogSchema = mongoose.Schema({
  hospitalName: {
    type: String,
  },
  title: {
    type: String,
  },

  description: {
    type: String,
  },
  image: {
    type: { data: Buffer, contentType: String },
  },

  hospital: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "hospital",
  },
});

const blogModel = mongoose.model("blog", blogSchema);
module.exports = blogModel;
