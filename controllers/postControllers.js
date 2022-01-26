import Post from "../models/Post.js";

export const getAllPosts = async (req, res) => {
  try {
    // Create query variable
    let query = Post.find();

    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.limit) || 50;
    const skip = pageSize * (page - 1);
    const total = await Post.countDocuments();

    const pages = Math.ceil(total / pageSize);

    query = query.skip(skip).limit(pageSize);

    if (page > pages) {
      return res.status(404).json({
        status: "fail",
        message: "No page found",
      });
    }

    const result = await query;

    res.status(200).json({
      status: "success",
      count: result.length,
      data: result,
      pages,
      page,
      pageSize,
      total,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "Server error",
    });
  }
};
