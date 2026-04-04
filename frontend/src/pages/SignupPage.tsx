import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function SignupPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e: any) => {
    e.preventDefault();

    if (name && email && password) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/home");
    }
  };

  return (
    <div className="auth-bg">

      <div className="auth-overlay"></div>

      <div className="auth-container">
        <div className="auth-card">

          <h2 className="text-center mb-4">Signup</h2>

          <form onSubmit={handleSignup}>
            <div className="mb-3">
              <label>Name</label>
              <input
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label>Email</label>
              <input
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button className="btn auth-btn w-100 mt-3">
              Signup
            </button>
          </form>

          <p className="text-center mt-3">
            Already have an account? <Link to="/login">Login</Link>
          </p>

        </div>
      </div>

    </div>
  );
}

export default SignupPage;