const mongoose = require ('mongoose')
const autoIncrement = require ('mongoose-auto-increment')
const bcrypt= require("bcrypt");
// how our document look like
const userSchema = mongoose.Schema({
    // name: String,

    userName: {
        type: String,
        required: [true, 'please provide a username']
    },

    email: {
    type: String,
    required: [true, 'please provide a email'],
    unique:true,
    //Regular expression for Email
    match:[
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "please provide a valid email"
    ]
    },
    password: {
        type: String,
        required: [true, 'please add a password '],
        minlength: 6,
        // we dont wana password to be send back as well unless we explicity tell ask the queryfor it
        select:false
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
    },
}); 
userSchema.pre("save", async function (next){
    if (!this.isModified("password")){
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password= await bcrypt.hash(this.password, salt)
    next();
});
autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'user');
// we need to turn it into a model
const postUser = mongoose.model('user', userSchema);

module.exports= postUser;

