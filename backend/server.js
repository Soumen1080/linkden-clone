import express from "express";
import cors from "cors";
import { config } from "dotenv";
import mongoose from "mongoose";
import postRoutes from "./routes/post.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());    
app.use("/api/posts", postRoutes);
const start = async () => {
    try {
const connectDB = await mongoose.connect(
    "mongodb+srv://soumen_linkden:FbhjwUIyIbq6sxJo:<password>@cluster0.ehezjvp.mongodb.net/?appName=Cluster0"
);
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
    } catch (error) {
        console.error(error);
    }
};