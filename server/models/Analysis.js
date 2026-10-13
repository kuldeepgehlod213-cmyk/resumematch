const mongoose = require("mongoose");

const analysisSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    resumeText: { type: String, required: true },
    jobDescription: { type: String, required: true },
    matchScore: { type: Number, default: null },
    missingKeywords: { type: [String], default: [] },
    suggestions: { type: [String], default: [] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Analysis", analysisSchema);