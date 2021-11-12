const mongoose= require('mongoose');


const doctorSchema= mongoose.Schema({

    docName:{
        type: String,
        required: true,
    },
    expirence: { 
        type: Number,
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
        type: Number,
        required: true,
    },
    hospital: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "hospital",
      }, 

      department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "department",
    },});

    const doctorModel = mongoose.model('doctor', doctorSchema);
    
    module.exports= doctorModel;
