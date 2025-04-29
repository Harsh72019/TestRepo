import mongoose from "mongoose";

// Used mongoose ORM for efficient handling of collections

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to mongoDb:", error.message);

    process.exit(1);
  }
};

export default connectDB;
