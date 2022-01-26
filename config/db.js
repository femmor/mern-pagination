import mongoose from "mongoose";

const connectDB = async () => {
  const dbUrl = process.env.MONGO_URI;

  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Connected...");
  } catch (error) {
    console.log("MongoDB Error: " + error);
    process.exit(1);
  }
};

export default connectDB;
