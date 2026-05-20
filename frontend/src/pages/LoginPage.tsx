import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    
    if (!email || !password) {
      alert("All fields are required ❗");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token); 
        alert("Login successful ");

        
        navigate("/home");
      } else {
        alert(data.message || "Login failed ");
      }
    } catch (error) {
      console.error(error);
      alert("Server error ");
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn auth-btn w-100 mt-3">
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