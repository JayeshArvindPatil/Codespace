import fs from "fs";
import csv from "csv-parser";


const cleanText = (text) => {
  if (!text) return "";
  return text
    .replace(/\r/g, "")
    .replace(/\n+/g, "\n")
    .replace(/<[^>]*>/g, "") 
    .trim();
};


const normalizeDifficulty = (diff) => {
  if (!diff) return "Easy";

  diff = diff.toLowerCase();

  if (diff.includes("easy")) return "Easy";
  if (diff.includes("medium")) return "Medium";
  if (diff.includes("hard")) return "Hard";

  return "Easy";
};


const detectTopicAndTags = (text) => {
  const lower = text.toLowerCase();

  if (lower.includes("array") || lower.includes("subarray")) {
    return { topic: "Array", tags: ["array"] };
  }

  if (lower.includes("linked list") || lower.includes("node")) {
    return { topic: "Linked List", tags: ["linked-list"] };
  }

  if (lower.includes("tree") || lower.includes("binary tree")) {
    return { topic: "Tree", tags: ["tree"] };
  }

  if (lower.includes("graph") || lower.includes("edges")) {
    return { topic: "Graph", tags: ["graph"] };
  }

  if (lower.includes("string") || lower.includes("substring")) {
    return { topic: "String", tags: ["string"] };
  }

  if (lower.includes("dp") || lower.includes("dynamic programming")) {
    return { topic: "Dynamic Programming", tags: ["dp"] };
  }

  if (lower.includes("search")) {
    return { topic: "Searching", tags: ["search"] };
  }

  if (lower.includes("stack")) {
    return { topic: "Stack", tags: ["stack"] };
  }

  if (lower.includes("queue")) {
    return { topic: "Queue", tags: ["queue"] };
  }

  return { topic: "General", tags: [] };
};

const results = [];
const seenTitles = new Set(); 

fs.createReadStream("./data/problems.csv")
  .pipe(csv())
  .on("data", (row) => {

    const title = cleanText(
      row.title || row.Name || row.problem_name || "Untitled"
    );

    const description = cleanText(
      row.description || row.Question || row.statement
    );

    const input = cleanText(
      row.input || row.Input || row.input_format || ""
    );

    const output = cleanText(
      row.output || row.Output || row.output_format || ""
    );

    const constraints = cleanText(
      row.constraints || row.Constraints || ""
    );

    const difficulty = normalizeDifficulty(
      row.difficulty || row.Level
    );

    if (!title || !description) return;

    if (seenTitles.has(title)) return;
    seenTitles.add(title);

    const combinedText = title + " " + description;
    const { topic, tags } = detectTopicAndTags(combinedText);

    const problem = {
      title,
      difficulty,
      description,
      input,
      output,
      constraints,
      topic,
      tags
    };

    results.push(problem);
  })
  .on("end", () => {
    console.log("CSV processed");

    
    const fileContent = `
const problems = ${JSON.stringify(results, null, 2)};

export default problems;
`;

    fs.writeFileSync("./data/problems.js", fileContent);

    console.log(`Generated problems.js with ${results.length} problems`);
  });