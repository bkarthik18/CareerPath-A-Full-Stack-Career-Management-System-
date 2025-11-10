import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    company: { type: String, required: true },
    position: { type: String, required: true },
    status: {
      type: String,
      enum: ["Applied", "Interview Scheduled", "Offer Received", "Rejected"],
      default: "Applied",
    },
    dateApplied: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", jobSchema);
export default Job;
