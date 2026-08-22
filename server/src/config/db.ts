import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connUri = process.env.MONGODB_URI || "mongodb://localhost:27017/portfolio";
    console.log(`Connecting to MongoDB at: ${connUri}`);
    
    const conn = await mongoose.connect(connUri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error instanceof Error ? error.message : error}`);
    process.exit(1);
  }
};
