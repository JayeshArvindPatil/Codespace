import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import problemRoutes from "./routes/problemRoutes.js";


dotenv.config();

const app = express();


app.use(cors());
app.use(express.json());


app.use("/api/auth", authRoutes);

app.use("/api/problems", problemRoutes);


mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 5000,
  family: 4 
})
.then(() => {
  console.log("MongoDB Connected");

  app.listen(5000, () => {
    console.log("Server running on port 5000");
  });
})
.catch(err => {
  console.log("DB Error:", err);
});

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});