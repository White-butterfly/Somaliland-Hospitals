const mongoose = require("mongoose");
const departmentSchema = mongoose.Schema({
  name: String,
  // doctor: [
  //   {
  //     docName: String,
  //     expirence: String,
  //     language: String,
  //     email: String,
  //     hours: String,
  //   },
  // ],
  hospital: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "hospital",
  },
  // role: {
  //   type: String,
  //   enum: ["admin", "user"],
  //   default: "user",
  // },
});
const departmentModel = mongoose.model("department", departmentSchema);
module.exports = departmentModel;
