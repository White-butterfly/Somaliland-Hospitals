const mongoose = require("mongoose");

const departmentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  hospital: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "hospital",
  },
});

const departmentModel = mongoose.model("department", departmentSchema);

module.exports = departmentModel;
