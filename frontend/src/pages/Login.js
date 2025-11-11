import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "../components/PageContainer";


const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Login failed");

      localStorage.setItem("token", data.token);
      alert("Login successful!");
      navigate("/profile");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <PageContainer>
      <h2 className="text-3xl font-bold mb-6 text-yellow-400 text-center">
        Welcome Back 👋
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-3 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 hover:bg-white/20 transition-all duration-200"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="p-3 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 hover:bg-white/20 transition-all duration-200"
        />

        <button
          type="submit"
          className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded-lg transition-all duration-200"
        >
          Login
        </button>
      </form>

      {error && (
        <p className="text-red-400 mt-4 text-center font-medium">{error}</p>
      )}

      <p className="mt-6 text-gray-300 text-sm text-center">
        Don’t have an account?{" "}
        <span
          onClick={() => navigate("/register")}
          className="text-yellow-400 hover:underline cursor-pointer"
        >
          Register here
        </span>
      </p>
    </PageContainer>
  );
};

export default Login;
