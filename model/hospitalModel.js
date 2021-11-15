const mongoose = require("mongoose");

// const autoIncrement= require('mongoose-auto-increment');
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

// hosShema.pre("save", async function (next){

// });

// autoIncrement.initialize(mongoose.connection);
// hosShema.plugin(autoIncrement.plugin, 'hospital');

const hospitals = mongoose.model("hospital", hosShema);
module.exports = hospitals;
