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
 
});
const hospitals = mongoose.model("hospital", hosShema);
module.exports = hospitals;