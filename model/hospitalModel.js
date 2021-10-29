const mongoose = require("mongoose");
const hosShema = mongoose.Schema({
  name: String,
  logo: String,
  image: String,
  date: Date,
  describtion: String,
  address: {
    city: String,
    region: String,
  },
  location: {
    long: Number,
    lat: Number,
  },
});
const hospitals = mongoose.model("hospital", hosShema);
module.exports = hospitals;
