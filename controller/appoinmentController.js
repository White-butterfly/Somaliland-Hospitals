const appoinment = require('./../model/appoinmentModel');
 //const Hospital = require("./../model/hospitalModel");
// const department= require('./../model/departmentModel');

exports.createAppoinment= async(req,res)=>{
    try{
// const hospital = await Hospital.findOne({name:req.body.hospital}) 
// req.body.hospital = hospital._id 

        const createAppoinment= await appoinment.create(req.body);
        res.status(200).json({
            message: "appoinment created",
            data: createAppoinment,
        })

    }catch(e){
        res.status(400).json({
            message:e.message
        });
    }}

exports.getAppoinment= async(req,res)=>{
    try{
       
        const  appoinments= await appoinment.find({});
        res.status(200).json({
            message: 'all Appoinments',
            data: appoinments, 
        });

    }catch(e){
        res.status(400).json({
            message:e.message
        });
    }}


 

exports.updateAppoinment= async(req,res)=>{
    try{
        const updateApp= await appoinment.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            message: "appoinment updated",
            data: updateApp,
        })
    }catch(e){
        res.status(400).json({
            message:e.message
        });
    } 
}
exports.deleteApp= async(req,res)=>{
    try{
        const deleteApp= await appoinment.findById(req.params.id);
        res.status(200).json({
            message: 'Appoinment deleted',
        })
    }catch(e){
        res.status(400).json({
            message:e.message
        });
    }}

    exports.getAppoinmentt= async(req,res)=>{
        try{

           
            const Appoinm= await appoinment.find({hospital: req.params.id}, {department: req.params.id}) 
            .populate('hospital')
            .populate('department');


            res.status(200).json({
                message: "you search and it is here",
                data: Appoinm,
            });
        }catch(e){
            res.status(400).json({ 
                message: e.message,
            });
        } }









