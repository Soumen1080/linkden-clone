import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import postRoutes from "./routes/post.routes.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);

const start = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connected successfully");
        
        app.listen(process.env.PORT || 5000, () => {
            console.log(`Server is running on port ${process.env.PORT || 5000}`);
        });
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};

start();