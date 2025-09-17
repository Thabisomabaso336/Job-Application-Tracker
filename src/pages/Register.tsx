import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      alert("All fields are required!");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.find((u: any) => u.username === username)) {
      alert("User already exists!");
      return
    }

    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful!");
    navigate("/login");
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister} className="form-box">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="form-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-input"
        />
        <button type="submit" className="btn">
          Register
        </button>
        <p>
          Already have an account?{" "}
          <span className="link" onClick={() => navigate("/login")}>
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
