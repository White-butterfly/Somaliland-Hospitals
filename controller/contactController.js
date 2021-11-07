const Contact = require("./../model/contactModel");

exports.createContact = async (req, res) => {
  //code
  try {
    await Contact.create(req.body);
    res.status(200).json({ message: "created" });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
}; 


exports.getcontact = async (req, res) => {
  try {
    const contactss = await Contact.find({});
    res.status(200).json({
      message: "found a contact",
      data: contactss, 
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

exports.deleteCon = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Contact  deleted",
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

exports.getContactt = async (req, res) => {
  try {
    const contsctsss = await Contact.findById(req.params.id);
    res.status(200).json({
      message: "you search and it is here",
      data: contactsss,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};
