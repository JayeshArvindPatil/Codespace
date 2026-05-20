import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Problem } from "../types/Problems.ts";

const TopicProblemsPage: React.FC = () => {
  const { topic } = useParams<{ topic: string }>();

  const [problems, setProblems] = useState<Problem[]>([]);

  console.log("Topic param:", topic);
  useEffect(() => {
    if (!topic) return;

    fetch(`${process.env.REACT_APP_API_URL}/api/problems/topic/${topic}`)
      .then(res => res.json())
      .then((data: Problem[]) => {
        console.log("Fetched problems:", data); 
        setProblems(data);
      })
      .catch(err => console.log(err));
  }, [topic]);

  return (
    <div className="container mt-5" style={{ maxWidth: "800px" }}>
      
      <h3 className="fw-bold mb-4">{topic} Problems</h3>

      {problems.length === 0 ? (
        <p className="text-muted">No problems found</p>
      ) : (
        <div className="list-group">

          {problems.map((p, index) => (
            <div
              key={p._id}
              className="list-group-item d-flex justify-content-between align-items-center list-hover"
            >
              
            
              <div>
                <h6 className="mb-1 fw-semibold">
                  {index + 1}. {p.title}
                </h6>
              </div>

              
              <div className="d-flex align-items-center gap-3">

                <span
                  className={
                    p.difficulty === "Easy"
                      ? "badge bg-success"
                      : p.difficulty === "Medium"
                      ? "badge bg-warning text-dark"
                      : "badge bg-danger"
                  }
                >
                  {p.difficulty}
                </span>

                <button
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => window.open(`/problem/${p._id}`, "_blank")}
                >
                  Solve
                </button>

              </div>
            </div>
          ))}

        </div>
      )}
    </div>
  );
};

export default TopicProblemsPage;