import React from "react";
import { useNavigate } from "react-router-dom";

const ProblemNavbar = ({ onRun }: { onRun: () => void }) => {
  const navigate = useNavigate();
  return (
    <div className="problem-navbar">

      <div className="nav-left">
        <button onClick={() => navigate("/topics")}><i className="fa-solid fa-arrow-left"></i></button>
        <button>Description</button>
        <button>Submissions</button>
        <button>Solution</button>
        <button>AI Guidance</button>
      </div>

      <div className="nav-right">
        <button className="run-btn" onClick={onRun}>Run</button>
        <button className="submit-btn">Submit</button>
      </div>

    </div>
  );
};

export default ProblemNavbar;