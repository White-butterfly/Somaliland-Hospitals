const appoinment = require("../model/appoinmentModel");
const Doctor = require("../model/doctorModel");
const Hospital = require("../model/hospitalModel");
const Department = require("../model/departmentModel");

exports.createAppoinment = async (req, res) => {
  try {
    const hospital = await Hospital.findOne({ name: req.body.hospital });
    req.body.hospital = hospital._id;
 
    const department = await Department.findOne({ name: req.body.department });
    req.body.department = department._id;

    const doctor = await Doctor.findOne({ name: req.body.doctor });
    req.body.doctor = doctor._id;

    const createAppoinments = await appoinment.create(req.body);
    res.status(200).json({
      message: "appoinment created",
      data: createAppoinments,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

exports.getAppoinment = async (req, res) => {
  try {
    const appoinments = await appoinment
      .find({ })
      .populate("hospital")
      .populate("department")
      .populate("doctor"); 

    res.status(200).json({
      message: "all Appoinments",
      data: appoinments,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

exports.deleteApp = async (req, res) => {
  try {
    await appoinment.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Appoinment deleted",
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

exports.getAppoinmentById = async (req, res) => {
  try {
    const Appoinm = await appoinment.find()
    res.status(200).json({
      message: "you search and it is here",
      data: Appoinm,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};


