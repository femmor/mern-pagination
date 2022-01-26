import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import connectDB from "../config/db.js";
import Post from "../models/Post.js";

dotenv.config({
  path: "../config.env",
});

connectDB();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Populate posts variable from posts.json file
const posts = JSON.parse(fs.readFileSync(`${__dirname}/posts.json`, "utf8"));

// Import the posts
const importData = async () => {
  try {
    await Post.create(posts);
    console.log("Data successfully imported!");
    process.exit(1);
  } catch (error) {
    console.log(`Error importing, ${error.message}`);
    process.exit(1);
  }
};

// Delete data
const deleteData = async () => {
  try {
    await Post.deleteMany({});
    console.log("Data successfully deleted!");
    process.exit(1);
  } catch (error) {
    console.log(`Error deleting, ${error.message}`);
    process.exit(1);
  }
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
