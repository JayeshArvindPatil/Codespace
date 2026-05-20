import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProblemNavbar from "../components/ProblemNavbar.tsx";

const ProblemDetailPage = () => {
    const { id } = useParams();

    const [problem, setProblem] = useState<any>(null);
    const [code, setCode] = useState("");
    const [output, setOutput] = useState("");

    const runCode = () => {
        setOutput("Output:\nHello World\nTest Case Passed ");
    };

    useEffect(() => {
        console.log("Fetching problem ID:", id);

        fetch(`http://localhost:5000/api/problems/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log("Fetched Problem:", data);
                setProblem(data);
            })
            .catch(err => {
                console.error("Error fetching problem:", err);
            });
    }, [id]);

    if (!problem) {
        return <div className="text-center mt-5">Loading problem...</div>;
    }

    return (
        <div className="problem-page">

            <ProblemNavbar onRun={runCode} />

            <div className="problem-layout">


                <div className="problem-left">

                    <h2>{problem.title}</h2>

                    <p style={{ marginTop: "10px" }}>
                        {problem.description}
                    </p>

                    <hr />

                    <h4>Input</h4>
                    <pre>{problem.input}</pre>

                    <h4>Output</h4>
                    <pre>{problem.output}</pre>

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