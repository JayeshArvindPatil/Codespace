import React from "react";

function ProblemsPage() {
  const topics = [
    { title: "Arrays", desc: "Learn basics of arrays and operations." },
    { title: "Linked List", desc: "Understand nodes and pointers." },
    { title: "Stack", desc: "LIFO data structure concepts." },
    { title: "Queue", desc: "FIFO structure and applications." },
    { title: "Trees", desc: "Binary trees and traversals." },
    { title: "Graphs", desc: "DFS, BFS and graph problems." },
    { title: "Binary Search", desc: "Efficient searching using divide and conquer." },
    { title: "Hashing", desc: "Fast data lookup using hash tables and maps." },
  ];

  return (
    <div className="container mt-5">

      <h3 className="text-center mb-4 fw-bold">Explore Topics</h3>

      <div className="row justify-content-center">
        {topics.map((topic, index) => (
          <div className="col-auto mb-4" key={index}>

            <div className="circle-card d-flex flex-column justify-content-center align-items-center text-center">

              <div className="icon-circle mb-2">
                <i className="fa-solid fa-code"></i>
              </div>

              <h6 className="fw-bold">{topic.title}</h6>

              <p className="small text-muted px-2">{topic.desc}</p>

              <button className="btn explore-btn btn-sm rounded-pill mt-2">
                Explore
              </button>

            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default ProblemsPage;