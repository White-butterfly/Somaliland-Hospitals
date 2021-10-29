const mongoose = require("mongoose");
const departmentSchema = mongoose.Schema({
  name: String,
    hospital: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "hospital",
  }

});
const departmentModel = mongoose.model("department", departmentSchema);
module.exports = departmentModel;
