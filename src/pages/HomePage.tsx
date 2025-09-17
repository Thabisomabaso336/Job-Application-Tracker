import React, { useState } from "react";
import "../App.css";

interface Job {
  id: number;
  company: string;
  role: string;
  status: "Applied" | "Interviewed" | "Rejected";
  date: string;
}

const Home: React.FC = () => {
  const [jobs] = useState<Job[]>([
    {
      id: 1,
      company: "Google",
      role: "Frontend Developer",
      status: "Applied",
      date: "2025-09-10",
    },
    {
      id: 2,
      company: "Amazon",
      role: "Business Analyst",
      status: "Interviewed",
      date: "2025-09-08",
    },
    {
      id: 3,
      company: "Tesla",
      role: "Mechanical Engineer",
      status: "Rejected",
      date: "2025-09-05",
    },
    {
      id: 4,
      company: "Microsoft",
      role: "Cloud Engineer",
      status: "Applied",
      date: "2025-09-02",
    },
  ]);

  const applied = jobs.filter((j) => j.status === "Applied").length;
  const interviewed = jobs.filter((j) => j.status === "Interviewed").length;
  const rejected = jobs.filter((j) => j.status === "Rejected").length;

  return (
    <div className="home-container">
      <h1>Welcome to Your Job Dashboard 👋</h1>
      <p className="subtitle">Track your applications and stay organized.</p>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stat-card applied">
          <h2>{applied}</h2>
          <p>Applied</p>
        </div>
        <div className="stat-card interviewed">
          <h2>{interviewed}</h2>
          <p>Interviewed</p>
        </div>
        <div className="stat-card rejected">
          <h2>{rejected}</h2>
          <p>Rejected</p>
        </div>
      </div>

      {/* Recent Applications */}
      <div className="recent-section">
        <h2>Recent Applications</h2>
        <div className="recent-list">
          {jobs.map((job) => (
            <div
              key={job.id}
              className={`recent-card ${job.status.toLowerCase()}`}
            >
              <h3>{job.role}</h3>
              <p>
                <strong>Company:</strong> {job.company}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                <span className="status">{job.status}</span>
              </p>
              <p>
                <strong>Date:</strong> {job.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
