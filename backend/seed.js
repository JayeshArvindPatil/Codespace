import mongoose from "mongoose";
import dotenv from "dotenv";
import Problem from "./models/Problem.js";
import problems from "./data/problems.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("DB Connected");

    await Problem.deleteMany(); // clear old data
    console.log("Problems length:", problems.length);
    await Problem.insertMany(problems);

    console.log("Data Inserted ");
    process.exit();
  })
  .catch(err => console.log(err));