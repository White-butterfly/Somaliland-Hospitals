const hospitalModel = require("./../model/hospitalModel");
exports.getHospital = async (req, res) => {
  try {
    const hospitals = await hospitalModel.find({});

    res.status(200).json({
      message: "all hospitals",
      data: hospitals,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

exports.createHospital = async (req, res) => {
  try {
    req.body.image = req.file.filename;
    const createHospital = await hospitalModel.create(req.body);
    res.status(200).json({
      message: "hospital created",
      data: createHospital,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};
exports.updateHospital = async (req, res) => {
  try {
<<<<<<< HEAD
    console.log(req.body.data);
    const hospitalss = await hospitalModel.findByIdAndUpdate(
      req.params.id,
      JSON.parse(req.body.data)
    );
=======
    const hospitalss = await hospitalModel.findByIdAndUpdate(req.params.id, req.body);
    
>>>>>>> 73ec41c9d261165f9b28cbf1b47d480eb6bd1ff0
    res.status(200).json({
      message: "Hospital updated",
      data: hospitalss,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};
exports.deleteHospital = async (req, res) => {
  try {
    await hospitalModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "hospital deleted",
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

exports.getHospitall = async (req, res) => {
  try {
    const hospitalsss = await hospitalModel.findById(req.params.id);
    res.status(200).json({
      message: "you search and it is here",
      data: hospitalsss,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};
