const mongoose = require("mongoose");
const hosShema = mongoose.Schema({
  name: {
    type: String,
    required:true,
  },
  logo: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required:true,

  },
  date: {
    type: Date,
  },
  describtion: {
    type: String,
    required: true,
  },

  address: {
    city: String,
    region: String,
  },

  geolocation: {
    long: Number,
    lat: Number,
  },

});
const hospitals = mongoose.model("hospital", hosShema);
module.exports = hospitals;
