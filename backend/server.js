import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";

dotenv.config();

const app = express(); // ✅ app defined before routes

app.use(cors());
app.use(express.json());

// ✅ Basic test route
app.get("/", (req, res) => {
  res.send("CareerPath API is running...");
});

// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("❌ Database connection error:", err));

// ✅ Routes (AFTER app and middleware)
app.use("/api/users", userRoutes);
app.use("/api/jobs", jobRoutes);

// ✅ Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
