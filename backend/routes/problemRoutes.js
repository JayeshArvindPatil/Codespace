import express from "express";
import Problem from "../models/Problem.js";

const router = express.Router();


router.get("/", async (req, res) => {
  try {
    const problems = await Problem.find();
    res.json(problems);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.get("/topic/:topic", async (req, res) => {
  try {
    const topic = req.params.topic;

    const problems = await Problem.find({
      topic: { $regex: `^${topic}$`, $options: "i" }
    });

    res.json(problems);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.get("/:id", async (req, res) => {
  try {
    const problem = await Problem.findById(req.params.id);
    res.json(problem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;