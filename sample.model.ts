// src/models/sample.model.ts
import mongoose from "mongoose";

const SampleSchema = new mongoose.Schema({
  hospitalName: { type: String, required: true },
  address: { type: String, required: true },
  scheduledTime: { type: Date, required: true },
  status: {
    type: String,
    enum: ["scheduled", "collected"],
    default: "scheduled",
  },
  agentId: { type: String, required: true },
});

export default mongoose.model("Sample", SampleSchema);
