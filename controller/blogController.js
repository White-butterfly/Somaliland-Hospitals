const blog = require("./../model/blogModel");

exports.createBlog = async (req, res) => {
  try {
    const createBlog = await blog.create(req.body);
    res.status(200).json({
      message: "Blog created ",
      data: createBlog,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

exports.getBlogs = async (req, res) => {
  try {
    const blogss = await blog.find({});
    res.status(200).json({
      message: "found a blog",
      data: blogss,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

exports.getblog = async (req, res) => {
  try {
    const blo = await blog
      .find({ hospital: req.params.id })

      .populate("hospital");
    res.status(200).json({
      message: "found",
      data: blo,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};
