import mongoose from "mongoose";

const problemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  difficulty: { type: String, required: true },
  description: { type: String, required: true },
  topic: { type: String },
  input: String,
  output: String,
  constraints: String,
  tags: [String]
});

export default mongoose.model("Problem", problemSchema);