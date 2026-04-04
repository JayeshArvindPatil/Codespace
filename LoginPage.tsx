import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: any) => {
    e.preventDefault();

    if (email && password) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/home");
    }
  };

  return (
    <div className="auth-bg">

      <div className="auth-overlay"></div>

      <div className="auth-container">
        <div className="auth-card">

          <h2 className="text-center mb-4">Login</h2>

          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
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
              Login
            </button>
          </form>

          <p className="text-center mt-3">
            Don’t have an account? <Link to="/signup">Signup</Link>
          </p>

        </div>
      </div>

    </div>
  );
}

export default LoginPage;