const mongoose = require("mongoose");
const blogSchema= mongoose.Schema({

title: {
    type : String,
},

description: {
    type : String,

},

hospital: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: "hospital",
},

});


const blogModel = mongoose.model("blog", blogSchema );
module.exports = blogModel;
