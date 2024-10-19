import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "cricmate",
    })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log("error connecting to MongoDB ", err));
};

export default connectDB;
