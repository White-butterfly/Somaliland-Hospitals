const mongoose = require("mongoose");

const hosShema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
  describtion: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },

  address: {
    city: String,
    region: String,
  },
});

const hospitals = mongoose.model("hospital", hosShema);
module.exports = hospitals;
