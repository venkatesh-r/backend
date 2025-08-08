import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  await mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.kqgy2ww.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
};

export default connectDB;
