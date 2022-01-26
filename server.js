import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import postRoutes from "./routes/postRoutes.js";

dotenv.config({
  path: "./config.env",
});

connectDB();

const app = express();

app.use(express.json());

app.use("/api/v1/posts", postRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
