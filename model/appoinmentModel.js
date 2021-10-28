const mongoose = require ('mongoose');

const appoinmentSchema=  mongoose.Schema({
    
    firstName:{
        type: String, 
        required: true, 
    },
    middleName: {
        type: String, 
    },
    lastName: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },

    region: {
        type: String, 
        required: true, 
    },

    hospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "hospital",
    },
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "department",
    },

    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "doctor",
    },
   
    date: Date,

})

const appoinmentModel = mongoose.model('appoinment', appoinmentSchema);
module.exports= appoinmentModel;