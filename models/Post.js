import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a post title"],
  },
  author: {
    type: String,
    required: [true, "Please provide an author"],
  },
  body: {
    type: String,
    required: [true, "Please provide a post body"],
  },
});

const Post = mongoose.model("Post", postSchema);
export default Post;
