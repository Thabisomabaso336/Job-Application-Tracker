import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (u: any) => u.username === username && u.password === password
    );

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      alert("Login successful!");

      navigate("/home");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="form-box">
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
          Login
        </button>
        <p>
          Don’t have an account?{" "}
          <span className="link" onClick={() => navigate("/register")}>
            Register
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
