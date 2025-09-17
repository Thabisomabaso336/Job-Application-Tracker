import React, { useState } from "react";
import "../App.css";

interface Job {
  id: number;
  company: string;
  role: string;
  category: string;
  status: "Applied" | "Interviewed" | "Rejected";
  date: string;
  location?: string;
  contactEmail?: string;
  duties?: string[];
  requirements?: string[];
  salary?: string;
}

const Jobs: React.FC = () => {
  const [jobs] = useState<Job[]>([
    {
      id: 1,
      company: "Google",
      role: "Frontend Developer",
      category: "Tech",
      status: "Applied",
      date: "2025-09-10",
      location: "Mountain View, CA",
      contactEmail: "hr@google.com",
      duties: [
        "Develop user-facing features using React",
        "Collaborate with UX/UI designers",
        "Ensure performance and responsiveness",
      ],
      requirements: [
        "3+ years experience in frontend development",
        "Strong knowledge of JavaScript, TypeScript, React",
        "Good understanding of REST APIs",
      ],
      salary: "$80,000 - $100,000",
    },
    {
      id: 2,
      company: "Amazon",
      role: "Business Analyst",
      category: "Business",
      status: "Interviewed",
      date: "2025-09-08",
      location: "Seattle, WA",
      contactEmail: "careers@amazon.com",
      duties: [
        "Analyze business processes and KPIs",
        "Collaborate with product and tech teams",
        "Prepare reports and dashboards",
      ],
      requirements: [
        "2+ years business analyst experience",
        "Strong Excel and SQL skills",
        "Knowledge of ERP systems preferred",
      ],
      salary: "$70,000 - $90,000",
    },
  ]);

  const categories = [
    "Tech",
    "Business",
    "Engineering",
    "Information Technology",
  ];
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  // Apply form state
  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [applicantMessage, setApplicantMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you could send data to an API or email system
    console.log("Application Submitted:", {
      job: selectedJob?.role,
      name: applicantName,
      email: applicantEmail,
      message: applicantMessage,
    });
    setSubmitted(true);
    setApplicantName("");
    setApplicantEmail("");
    setApplicantMessage("");
  };

  return (
    <div className="jobs-container">
      <h2>Jobs by Category</h2>
      <div className="jobs-categories">
        {categories.map((cat) => (
          <div key={cat} className="category-section">
            <h3>{cat}</h3>
            <div className="job-list">
              {jobs
                .filter((job) => job.category === cat)
                .map((job) => (
                  <div
                    key={job.id}
                    className={`job-card ${job.status.toLowerCase()}`}
                    onClick={() => {
                      setSelectedJob(job);
                      setSubmitted(false);
                    }}
                  >
                    <h4>{job.role}</h4>
                    <p>
                      <strong>Company:</strong> {job.company}
                    </p>
                    <p>
                      <strong>Status:</strong> {job.status}
                    </p>
                    <p>
                      <strong>Date Applied:</strong> {job.date}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      {selectedJob && (
        <div className="job-details-overlay">
          <div className="job-details-card">
            <button className="close-btn" onClick={() => setSelectedJob(null)}>
              X
            </button>
            <h2>
              {selectedJob.role} at {selectedJob.company}
            </h2>
            <p>
              <strong>Category:</strong> {selectedJob.category}
            </p>
            <p>
              <strong>Status:</strong> {selectedJob.status}
            </p>
            {selectedJob.location && (
              <p>
                <strong>Location:</strong> {selectedJob.location}
              </p>
            )}
            {selectedJob.contactEmail && (
              <p>
                <strong>Contact:</strong> {selectedJob.contactEmail}
              </p>
            )}
            {selectedJob.salary && (
              <p>
                <strong>Salary:</strong> {selectedJob.salary}
              </p>
            )}
            <p>
              <strong>Date Applied:</strong> {selectedJob.date}
            </p>

            <h3>Duties & Responsibilities:</h3>
            <ul>
              {selectedJob.duties?.map((duty, idx) => (
                <li key={idx}>{duty}</li>
              ))}
            </ul>

            <h3>Requirements:</h3>
            <ul>
              {selectedJob.requirements?.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>

            <h3>Apply for this job:</h3>
            {submitted ? (
              <p className="success-msg">
                ✅ Your application has been submitted!
              </p>
            ) : (
              <form onSubmit={handleApply} className="apply-form">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={applicantName}
                  onChange={(e) => setApplicantName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={applicantEmail}
                  onChange={(e) => setApplicantEmail(e.target.value)}
                  required
                />
                <textarea
                  placeholder="Message (optional)"
                  value={applicantMessage}
                  onChange={(e) => setApplicantMessage(e.target.value)}
                />
                <button type="submit">Submit Application</button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Jobs;
