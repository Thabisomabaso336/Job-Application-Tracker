import React from "react";
import "../App.css";

const Landing: React.FC = () => {
  return (
    <div className="landing-container">
      <div className="landing-hero">
        <h1>Welcome to JobTracker</h1>
        <p>
          Track your job applications easily and stay organized. Know which
          applications are pending, rejected, or successful.
        </p>
        <button className="btn hero-btn">Get Started</button>
      </div>

      <div className="landing-features">
        <div className="feature-card">
          <h3>📊 Track Applications</h3>
          <p>Monitor how many jobs you have applied for in one place.</p>
        </div>
        <div className="feature-card">
          <h3>🎯 Organize by Status</h3>
          <p>Sort jobs by Applied, Interviewed, or Rejected to stay on top.</p>
        </div>
        <div className="feature-card">
          <h3>🔎 Search & Filter</h3>
          <p>Find applications quickly with search and filters.</p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
