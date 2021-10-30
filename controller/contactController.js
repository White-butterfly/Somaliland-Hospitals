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

exports.contacts = async (req, res) => {
  try {
    const contact = await Contact.find({ hospital: req.params.id }).populate(
      "hospital"
    );
    res.status(200).json({ contact });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};
