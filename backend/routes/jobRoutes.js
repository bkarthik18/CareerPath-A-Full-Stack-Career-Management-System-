import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import Job from "../models/jobModel.js";

const router = express.Router();

// ➕ Add a new job
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { company, position, status } = req.body;
    const job = new Job({
      user: req.user.id,
      company,
      position,
      status,
    });
    await job.save();
    res.status(201).json({ message: "Job added successfully", job });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 📋 Get all jobs for the logged-in user
router.get("/", authMiddleware, async (req, res) => {
  try {
    const jobs = await Job.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✏️ Update a job (edit company, position, or status)
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const { company, position, status } = req.body;
    const job = await Job.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      { company, position, status },
      { new: true }
    );
    if (!job) return res.status(404).json({ message: "Job not found" });
    res.json({ message: "Job updated successfully", job });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 🗑️ Delete a job
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const job = await Job.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });
    if (!job) return res.status(404).json({ message: "Job not found" });
    res.json({ message: "Job deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✅ This line is very important (the default export)
export default router;
