const User = require ('../model/user.js');

exports.register = async(req,res,next)=> {
   const {username, email,password}=req.body;
   try{
const user= await User.create({
    username, email, password
});
res.status(201).json({
    success:true,
    user,
});

   }catch(e){
       res.status(500).json({
        success:false,
        error:error.message,
       });

   }
};
exports.login= (req,res,next)=>{
    res.send('Login Route');
};

exports.forgotpassword= (req,res,next)=>{
    res.send('forgotpassword Route');
};

exports.resetpassword= (req,res,next)=>{
    res.send('resetpassword Route');
};


