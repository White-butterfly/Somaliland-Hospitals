
const User = require ('../model/user.js');
const bcrypt= require("bcrypt");
const jwt = require('jsonwebtoken');
exports.getUser= async(req,res)=>{
    try{
        const useri= await User.find({});
        res.status(200).json({
            message: 'all users',
            data: useri,
        });
    }catch(e){
        res.status(400).json({
            message:e.message 
        }) }}

        exports.createuser= async(req,res)=>{
            try{
                const hashpassword= await bcrypt.hash(req.body.password,10)
                const createuser= await User.create({
                    name: req.body.name,
                    userName: req.body.userName,
                    email: req.body.email,
                    phone: req.body.phone,
                    password:hashpassword,
                });
                res.status(200).json({
                    message: 'created',
                    // data: user,
                });
            }catch (e){
                res.status(400).json({
                    message:e.message,
                });
            }};
            exports.updateUser= async(req,res)=> { 
                // console.log("-----", req.body)
                try{
                    const userss= await User.findByIdAndUpdate(req.body._id, req.body);
                    res.status(200).json({
                        message: "user updated",
                        data: userss,
                    });
    
                }catch (e){
                    res.status(400).json({
                        message: e.message,
                    });}};
                    exports.deleteUserr= async(req,res)=>{
                        try{
                            await User.findByIdAndDelete(req.params.id);
                            res.status(200).json({
                                message: "user deleted",
                            });
            
                        }catch (e){
                            res.status(400).json({
                                message: e.message,
                            });
                        }
                    };
            
                    exports.getUserr= async(req,res)=>{
                        try{
                            const usersss= await User.findById(req.params.id);
                            res.status(200).json({
                                message: "you search and it is here",
                                data: usersss,
                            });
                        }catch(e){
                            res.status(400).json({
                                message: e.message,
                            });
                        } }
            
            













