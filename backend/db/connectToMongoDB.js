import mongoose from "mongoose";
import { env } from "process";

const connectToMongoDB = async () => {
	try {
		await mongoose.connect(process.env.connectToMongoDB);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;
