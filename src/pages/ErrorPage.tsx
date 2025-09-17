import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const NotFound: React.FC = () => {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to="/home" className="btn">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
