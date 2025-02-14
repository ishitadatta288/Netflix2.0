import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const databaseConnection = async () => {
    try {
        const uri = process.env.MONGO_URI;
        if (!uri) {
            throw new Error("MONGO_URI is not defined. Check your .env file.");
        }

        // Connecting to MongoDB without deprecated options
        await mongoose.connect(uri);

        console.log("✅ MongoDB connected successfully");
    } catch (error) {
        console.error("❌ Database connection failed:", error.message);
        process.exit(1); // Exit process if DB connection fails
    }
};

export default databaseConnection;
