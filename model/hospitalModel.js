const mongoose = require("mongoose");
const hosShema = mongoose.Schema({
  name: String,
  logo: String,
  image: String, 
  date: Date,  
  address: {
    city: String,
    region: String,
  },
  role: { 
    type: String,
    enum: ["admin", "user"],
    default: "user",
  }, 
});
const hospitals = mongoose.model("hospital", hosShema);
module.exports = hospitals;