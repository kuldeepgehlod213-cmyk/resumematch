const Anthropic = require("@anthropic-ai/sdk");

const apiKey = process.env.ANTHROPIC_API_KEY || process.env.API_KEY;

if (!apiKey) {
  throw new Error("Missing Anthropic API key. Set ANTHROPIC_API_KEY or API_KEY in server/.env");
}

const client = new Anthropic({ apiKey });

async function analyzeResume(resumeText, jobDescription) {
  const message = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 1000,
    system:
      "You are a resume reviewer. Reply ONLY with valid JSON, no extra text, no markdown. " +
      'Format: {"matchScore": number 0-100, "missingKeywords": [strings], "suggestions": [strings]}. ' +
      "Give at most 8 missing keywords and 5 short, practical suggestions.",
    messages: [
      {
        role: "user",
        content: `Resume:\n${resumeText}\n\nJob Description:\n${jobDescription}`,
      },
    ],
  });

  const text = message.content
    .filter((b) => b.type === "text")
    .map((b) => b.text)
    .join("");

  const clean = text.replace(/```json|```/g, "").trim();
  return JSON.parse(clean);
}

module.exports = { analyzeResume };