import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`Mongodb Connected ${connect.connection.host}`);
  } catch (error) {
    console.log("Error connecting Database: ", error.message);
    process.exit(1);
  }
};

export default connectDB;
