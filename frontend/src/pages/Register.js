import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "../components/PageContainer";

function Register() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Registration failed");
      alert("Registered successfully!");
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <PageContainer>
      <h2 className="text-3xl font-bold mb-6 text-yellow-400">Create Your Account 💼</h2>

      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-3 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:ring-2 focus:ring-yellow-400"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-3 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:ring-2 focus:ring-yellow-400"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="p-3 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:ring-2 focus:ring-yellow-400"
        />

        <button
          type="submit"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-lg transition-all duration-200"
        >
          Register
        </button>
      </form>

      {error && <p className="text-red-400 mt-3">{error}</p>}
    </PageContainer>
  );
}

export default Register;
