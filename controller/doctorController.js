const doctor = require("../model/doctorModel");
const Hospital = require("../model/hospitalModel");
const Department = require("../model/departmentModel");

exports.createDoctor = async (req, res) => {
  try {
    // const hospital = await Hospital.findOne({name:req.body.hospital})
    // req.body.hospital = hospital._id

<<<<<<< HEAD
    // const department= await Department.findOne({name:req.body.department})
    // req.body.department= department._id

    const createDoctor = await doctor.create(req.body);
=======
const hospital = await Hospital.findOne({name:req.body.hospital})  
req.body.hospital = hospital._id 

const department= await Department.findOne({name:req.body.department})
req.body.department= department._id
>>>>>>> 73ec41c9d261165f9b28cbf1b47d480eb6bd1ff0

    res.status(200).json({
      message: "created a doctor",
      data: createDoctor,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

<<<<<<< HEAD
exports.getDoctor = async (req, res) => {
  try {
    const doctorsss = await doctor.find({}).populate({
      path: "department",
      populate: { path: "hospital", model: "hospital" },
    });

    res.status(200).json({
      message: "found a doctor",
      data: doctorsss,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

exports.updateDoctor = async (req, res) => {
  try {
    const updateDoc = await doctor.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      message: "doctor updated",
      data: updateDoc,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

exports.deleteDoc = async (req, res) => {
  try {
    await doctor.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Doctor deleted",
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

exports.getDoctorById = async (req, res) => {
  try {
    const Doci = await appoinment
      .findById({ hospital: req.params.id }, req.params.id, req.body)
      .populate("hospital");
=======
exports.getDoctor= async (req,res)=>{
    try{
        const doctorsss = await doctor.find({})
        
          .find({})
          
          .populate("hospital")
          .populate("department")
 
res.status(200).json({ 
    message: "found a doctor",
    data: doctorsss,
});
    }catch(e){
res.status(400).json({
    message:e.message
})
}}; 
 
exports.updateDoctor= async(req,res)=>{
    try{
        const updateDoc= await doctor.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            message: "doctor updated",
            data: updateDoc,
        })
    }catch(e){
        res.status(400).json({
            message:e.message
        });
    }}

    exports.deleteDoc= async(req,res)=>{
        try{
           await doctor.findByIdAndDelete(req.params.id);
            res.status(200).json({
                message: 'Doctor deleted',
            })
        }catch(e){
            res.status(400).json({
                message:e.message 
            });
        }}
>>>>>>> 73ec41c9d261165f9b28cbf1b47d480eb6bd1ff0

    res.status(200).json({
      message: "you search and it is here",
      data: Doci,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};
