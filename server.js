import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./config.env",
});

connectDB();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the backend!");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
