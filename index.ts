// src/index.ts
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import sampleRoutes from "./routes/sample.route";

dotenv.config();
const app = express();
app.use(express.json());
app.use("/api", sampleRoutes);

mongoose
  .connect(process.env.MONGO_URI || "")
  .then(() => {
    app.listen(3000, () => console.log("Server is running on port 3000"));
  })
  .catch((err) => console.error("MongoDB connection failed:", err));
