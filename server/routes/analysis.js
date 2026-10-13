const express = require("express");
const Analysis = require("../models/Analysis");
const authMiddleware = require("../middleware/auth");
const { analyzeResume } = require("../services/ai");

const router = express.Router();

// Nayi analysis save karo
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { resumeText, jobDescription } = req.body;
    if (!resumeText || !jobDescription) {
      return res.status(400).json({ message: "Resume aur job description zaroori hain" });
    }

    let result;
    try {
      result = await analyzeResume(resumeText, jobDescription);
    } catch (err) {
      console.log("AI error:", err.message);

      if (err?.status === 401 || /x-api-key|authentication/i.test(err?.message || "")) {
        return res.status(401).json({
          message: "Invalid or missing Anthropic API key. Please add a valid ANTHROPIC_API_KEY in server/.env.",
        });
      }

      return res.status(502).json({ message: "AI analysis fail ho gaya, thodi der baad try karo" });
    }

    const analysis = await Analysis.create({
      user: req.userId,
      resumeText,
      jobDescription,
      matchScore: result.matchScore,
      missingKeywords: result.missingKeywords,
      suggestions: result.suggestions,
    });
    res.status(201).json(analysis);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});
// Apni saari analysis dekho
router.get("/", authMiddleware, async (req, res) => {
  try {
    const list = await Analysis.find({ user: req.userId }).sort({ createdAt: -1 });
    res.json(list);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Ek analysis delete karo (sirf apni)
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const deleted = await Analysis.findOneAndDelete({ _id: req.params.id, user: req.userId });
    if (!deleted) {
      return res.status(404).json({ message: "Analysis nahi mili" });
    }
    res.json({ message: "Delete ho gaya" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;