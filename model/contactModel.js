const mongoose = require("mongoose");
const ContactSchema = mongoose.Schema({
  userName: { 
    type: String,
    required: true,
  },

  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String, 
    required: true,
  },

  message: {
    type: String,
    required: true,
  },
  hospital: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "hospital",
  },
});

const contactModel = mongoose.model("contact", ContactSchema);
module.exports = contactModel;
