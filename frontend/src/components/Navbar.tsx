import logo from '../assets/logo.png';
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/home");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#0f172a" }}>
      <div className="container-fluid">

        
        <Link className="navbar-brand" to="/home">
          <img src={logo} alt="Logo" width="30" height="24" />
          CodeSpace
        </Link>

       
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

         
          <ul className="navbar-nav me-auto gap-3">

            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/topics">Problems</Link>
            </li>

            
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link"
                data-bs-toggle="dropdown"
              >
                Interview
              </button>

              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/interview/online">
                    Online Interview
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/interview/assesment">
                    DSA Assessment
                  </Link>
                </li>
              </ul>
            </li>

          </ul>

          
          <form className="d-flex mx-auto" style={{ width: "300px" }}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search problems..."
            />
            <button className="btn btn-outline-secondary" type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>

          
          <ul className="navbar-nav ms-auto gap-3">

            {!isLoggedIn && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/signup">Signup</Link>
                </li>
              </>
            )}

            {isLoggedIn && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">
                    <i className="fa-solid fa-circle-user" style={{ fontSize: "22px" }}></i>
                  </Link>
                </li>

                <li className="nav-item">
                  <button className="nav-link logout-btn" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            )}

          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;