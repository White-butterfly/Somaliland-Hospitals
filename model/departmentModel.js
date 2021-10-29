const mongoose = require("mongoose");
<<<<<<< HEAD
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
=======
const departmentSchema= mongoose.Schema({

  name: {
    type: String,
    required: true,
  },

>>>>>>> 70ac12b96b66971055418f65b2f59f5f44cabf54
  hospital: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "hospital",
  },
<<<<<<< HEAD
  // role: {
  //   type: String,
  //   enum: ["admin", "user"],
  //   default: "user",
  // },
});
const departmentModel = mongoose.model("department", departmentSchema);
=======
 
});

const departmentModel = mongoose.model("department", departmentSchema );
>>>>>>> 70ac12b96b66971055418f65b2f59f5f44cabf54
module.exports = departmentModel;
