import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "../App.css";

const Navbar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src="src\assets\images\security.png"
          alt="Company Logo"
          className="logo"
        />
        <h1 className="company-name">JobTracker</h1>
      </div>

      <div className="navbar-links">
        <Link to="/home" className="nav-link">
          Home
        </Link>
        <Link to="/landing" className="nav-link">
          Landing
        </Link>
        <Link to="/jobs" className="nav-link">
          Jobs
        </Link>
        <Link to="/not-found" className="nav-link">
          404 Page
        </Link>
      </div>

      <div className="navbar-right">
        <div
          className="user-menu"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <FaUserCircle className="user-icon" />
          {dropdownOpen && (
            <div className="dropdown">
              <Link to="/login" className="dropdown-item">
                Login
              </Link>
              <Link to="/register" className="dropdown-item">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
