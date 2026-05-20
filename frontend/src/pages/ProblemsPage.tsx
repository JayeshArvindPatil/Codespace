import React from "react";
import { useNavigate } from "react-router-dom";

interface Topic {
  id: number;
  title: string;
  desc: string;
  icon: string;
}

const ProblemsPage: React.FC = () => {
  const navigate = useNavigate();

  const topics: Topic[] = [
    { id: 1, title: "Arrays", desc: "Learn basics of arrays and operations.", icon: "fa-solid fa-table" },
    { id: 2, title: "Linked List", desc: "Understand nodes and pointers.", icon: "fa-solid fa-link" },
    { id: 3, title: "Stack", desc: "LIFO data structure concepts.", icon: "fa-solid fa-layer-group" },
    { id: 4, title: "Queue", desc: "FIFO structure and applications.", icon: "fa-solid fa-arrows-turn-right" },
    { id: 5, title: "Trees", desc: "Binary trees and traversals.", icon: "fa-solid fa-tree" },
    { id: 6, title: "Graphs", desc: "DFS, BFS and graph problems.", icon: "fa-solid fa-project-diagram" },
    { id: 7, title: "Binary Search", desc: "Efficient searching algorithms.", icon: "fa-solid fa-magnifying-glass" },
    { id: 8, title: "Hashing", desc: "Fast lookup using hash tables.", icon: "fa-solid fa-hashtag" },
    { id: 9, title: "Strings", desc: "String manipulation problems.", icon: "fa-solid fa-font" },
    { id: 10, title: "Dynamic Programming", desc: "Optimize problems using DP.", icon: "fa-solid fa-brain" }
  ];

  return (
    <div className="container mt-5">

      <div className="text-center mb-5">
        <h2 className="fw-bold">Explore Topics</h2>
        <p className="text-muted">
          Choose a topic and start solving coding problems
        </p>
      </div>

      <div className="row justify-content-center">
        {topics.map((topic) => (
          <div key={topic.id} className="col-md-3 col-sm-6 mb-4">

            <div className="card topic-card shadow-sm h-100 border-0 text-center p-3">

              <div className="mb-3">
                <i className={`${topic.icon} fa-2x text-primary`}></i>
              </div>

              <h5 className="fw-bold">{topic.title}</h5>

              <p className="text-muted small">{topic.desc}</p>

              <button
                className="btn btn-primary btn-sm mt-auto"
                onClick={() => navigate(`/problems/${topic.title}`)}
              >
                Explore
              </button>

            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default ProblemsPage;