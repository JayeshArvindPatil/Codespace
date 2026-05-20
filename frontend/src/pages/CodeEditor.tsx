import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProblemNavbar from "../components/ProblemNavbar.tsx";

interface Problem {
  _id: string;
  title: string;
  description: string;
  input: string;
  output: string;
  difficulty: string;
}

const ProblemDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [problem, setProblem] = useState<Problem | null>(null);
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:5000/api/problems/${id}`)
      .then(res => res.json())
      .then(data => setProblem(data))
      .catch(err => console.log(err));
  }, [id]);

  const runCode = () => {
    setOutput("Output:\nHello World\nTest Case Passed");
  };

  return (
    <div className="problem-page">

      
      <ProblemNavbar onRun={runCode} />

      <div className="problem-layout">

        
        <div className="problem-left">

          {!problem ? (
            <p>Loading...</p>
          ) : (
            <>
              <h2>{problem.title}</h2>

              <span className={
                problem.difficulty === "Easy"
                  ? "badge bg-success"
                  : problem.difficulty === "Medium"
                  ? "badge bg-warning text-dark"
                  : "badge bg-danger"
              }>
                {problem.difficulty}
              </span>

              <p className="mt-3">{problem.description}</p>

              <h5>Input:</h5>
              <pre>{problem.input}</pre>

              <h5>Output:</h5>
              <pre>{problem.output}</pre>
            </>
          )}

        </div>

       
        <div className="problem-right">

         
          <div className="editor">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Write your code here..."
            />
          </div>

          
          <div className="output">
            <h4>Result</h4>
            <pre>{output || "Run your code to see output..."}</pre>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProblemDetailPage;