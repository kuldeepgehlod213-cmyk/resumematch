const express = require("express");
const Analysis = require("../models/Analysis");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

// Nayi analysis save karo
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { resumeText, jobDescription } = req.body;
    if (!resumeText || !jobDescription) {
      return res.status(400).json({ message: "Resume aur job description zaroori hain" });
    }
    const analysis = await Analysis.create({
      user: req.userId,
      resumeText,
      jobDescription,
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