import React, { useState, useEffect } from "react";
import axios from "axios";
import PageContainer from "../components/PageContainer";

const JobTracker = () => {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [status, setStatus] = useState("Applied");
  const [jobs, setJobs] = useState([]);

  const token = localStorage.getItem("token");

  // ✅ Fetch jobs for logged-in user
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/jobs", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setJobs(res.data);
      } catch (err) {
        console.error("Error fetching jobs:", err);
      }
    };
    fetchJobs();
  }, [token]);

  // ✅ Add job
  const handleAddJob = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/api/jobs",
        { company, position, status },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCompany("");
      setPosition("");
      setStatus("Applied");

      const res = await axios.get("http://localhost:5000/api/jobs", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setJobs(res.data);
    } catch (err) {
      console.error("Error adding job:", err);
    }
  };

  // ✅ Delete job
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/jobs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setJobs(jobs.filter((job) => job._id !== id));
    } catch (err) {
      console.error("Error deleting job:", err);
    }
  };

  // ✅ Edit job (prefill fields)
  const handleEdit = (job) => {
    setCompany(job.company);
    setPosition(job.position);
    setStatus(job.status);
    handleDelete(job._id);
  };

  return (
    <PageContainer>
      <h2 className="text-3xl font-bold mb-6 text-yellow-400 text-center">
        Career Tracker 🧭
      </h2>

      {/* ✅ Form */}
      <form onSubmit={handleAddJob} className="mb-6 text-left">
        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
          className="p-3 w-full mb-3 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <input
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          required
          className="p-3 w-full mb-3 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="p-3 w-full mb-3 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          <option className="text-black">Applied</option>
          <option className="text-black">Interview Scheduled</option>
          <option className="text-black">Offer Received</option>
          <option className="text-black">Rejected</option>
        </select>

        <button
          type="submit"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded-lg w-full transition-all duration-200"
        >
          Add Job
        </button>
      </form>

      {/* ✅ Job List */}
      <h3 className="text-xl font-semibold mb-4 text-center text-yellow-300">
        Your Job Applications
      </h3>

      {jobs.length === 0 ? (
        <p className="text-gray-300 text-center">No jobs added yet.</p>
      ) : (
        <ul className="space-y-3 text-left">
          {jobs.map((job) => (
            <li
              key={job._id}
              className="bg-white/10 p-4 rounded-lg border border-white/10 flex justify-between items-center hover:bg-white/20 transition-all duration-300"
            >
              <div>
                <h4 className="font-bold text-yellow-400">{job.company}</h4>
                <p className="text-gray-200 text-sm">{job.position}</p>
                <span className="text-sm text-gray-400">({job.status})</span>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(job)}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black px-3 py-1 rounded-md text-sm font-semibold transition-all"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(job._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm font-semibold transition-all"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </PageContainer>
  );
};

export default JobTracker;
