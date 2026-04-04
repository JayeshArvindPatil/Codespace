import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">

      {/* ================= HERO SECTION ================= */}
      <div className="text-center mb-5">

        <h1 className="fw-bold display-5">
          Master DSA with <span className="brand-text">CodeSpace</span> 🚀
        </h1>

        <p className="text-muted mt-3">
          Practice problems, crack interviews and become a better developer.
        </p>

        {/* ✅ BUTTON (NOT LINK) */}
        <button
          onClick={() => navigate("/problems")}
          className="btn start-btn mt-4 px-4 py-2 rounded-pill"
        >
          Start Practicing
        </button>

      </div>

      {/* ================= FEATURES ================= */}
      <div className="row text-center mt-5">

        <div className="col-md-4 mb-4">
          <div className="home-card p-4">
            <div className="icon-circle mb-3">
              <i className="fa-solid fa-code"></i>
            </div>
            <h5 className="fw-bold">DSA Topics</h5>
            <p className="text-muted">
              Learn Arrays, Trees, Graphs and more with structured content.
            </p>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="home-card p-4">
            <div className="icon-circle mb-3">
              <i className="fa-solid fa-laptop-code"></i>
            </div>
            <h5 className="fw-bold">Practice Problems</h5>
            <p className="text-muted">
              Solve real interview questions and improve problem-solving skills.
            </p>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="home-card p-4">
            <div className="icon-circle mb-3">
              <i className="fa-solid fa-chart-line"></i>
            </div>
            <h5 className="fw-bold">Track Progress</h5>
            <p className="text-muted">
              Monitor your growth and stay consistent in your journey.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default HomePage;
