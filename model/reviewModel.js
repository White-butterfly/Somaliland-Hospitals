const mongoose= require('mongoose');
const ReviewSchema= mongoose.Schema({

    patientName:{
        type: String,
        required: true,
    },
    rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
    age: {
        type:  Number,
        required: true,
    },
    country:{
        type: String,
        required: true,
    },


    review: {
        type: String,
        required: true,
    },
    hospital: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "hospital",
      },


});

const reviewModel = mongoose.model ('review', ReviewSchema);
    module.exports= reviewModel;