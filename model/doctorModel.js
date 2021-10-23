const mongoose= require('mongoose');
const doctorSchema= mongoose.Schema({

    docName:{
        type: String,
        required: true,
    },
    expirence: {
        type: String,
        required: true,
    },
    language: {
        type:  String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },

    hours: {
        type: String,
        required: true,
    },
    // closedTime: {
    //     type: false,
    // },
    // openTime: {
    //     type: true,
    // },

    hospital: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "hospital",
      },

      department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "department",
    },
    // appoinment: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "appoinment",
    // }

});

const doctorModel = mongoose.model ('doctor', doctorSchema);
    module.exports= doctorModel;