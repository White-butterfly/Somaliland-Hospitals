const department= require('../model/departmentModel');
const Hospital = require("../model/hospitalModel")


exports.createDepartment = async (req,res)=> {
    try{


const hospital = await Hospital.findOne({name:req.body.hospital}) 
req.body.hospital = hospital._id 


const createDepartment = await department.create(req.body);

res.status(200).json({
    message: 'created a department ',
    data: createDepartment,

});
} catch (e){
    res.status(400).json({
        message:e.message,
    });
}
};
exports.getDepartments= async (req,res)=>{
    try{
        const departmentss = await department.find({});
res.status(200).json({
    message: "found a department",
    data: departmentss,
});
    }catch(e){
res.status(400).json({
    message:e.message
})
}}; 


exports.getDepartment = async (req,res)=>{
try{
    const dep = await department.find({ hospital: req.params.id})
    .populate('hospital');
res.status(200).json({
    message: "found",
    data: dep,
});
}catch(e){
res.status(400).json({
    message: e.message,
});
}
}