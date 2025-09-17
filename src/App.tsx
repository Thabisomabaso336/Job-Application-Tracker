import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./component/NavBar";
import Footer from "./component/Footer";

import HomePage from "./pages/HomePage";
import Landing from "./pages/Landing";
import Jobs from "./pages/Jobs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="content">
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
