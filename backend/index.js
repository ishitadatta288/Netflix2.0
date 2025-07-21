import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import cors from "cors";

dotenv.config(); // Load .env first

databaseConnection(); // Then connect to DB

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
    origin: 'https://netflix2-0-rftd.vercel.app',
    credentials:true
}
app.use(cors(corsOptions));

// API Routes
app.use("/api/v1/user", userRoute);

app.listen(process.env.PORT, () => {
    console.log(`🚀 Server listening at port ${process.env.PORT}`);
});
