import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import JobTracker from "./pages/JobTracker";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/register" replace />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/jobtracker" element={<JobTracker />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
