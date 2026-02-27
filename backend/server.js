import express from "express";
import cors from "cors";
import { config } from "dotenv";
import mongoose from "mongoose";
import postRoutes from "./routes/post.routes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());    
app.use("/api/posts", postRoutes);
const start = async () => {
    try {
const connectDB = await mongoose.connect(
    "mongodb+srv://soumen_linkden:zUJWaXwEv6mzTbAI@linkdenclone.7astwrb.mongodb.net/?appName=linkdenClone"
);
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
    } catch (error) {
        console.error(error);
    }
};

start();