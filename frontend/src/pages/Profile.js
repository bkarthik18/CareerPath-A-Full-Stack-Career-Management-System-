import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "../components/PageContainer";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/users/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message);
        setUser(data.user);
      } catch (err) {
        console.error(err);
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [token, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  // 🔄 Loading screen while fetching
  if (loading) {
    return (
      <PageContainer>
        <div className="flex justify-center items-center h-[60vh]">
          <div className="animate-pulse text-yellow-400 text-xl font-semibold">
            Loading your profile...
          </div>
        </div>
      </PageContainer>
    );
  }

  if (!user) return null;

  return (
    <PageContainer>
      {/* 👇 Fade-in animation wrapper */}
      <div className="page-transition text-center">
        <h2 className="text-3xl font-bold mb-6 text-yellow-400">
          Welcome, {user.email.split("@")[0]} 🎉
        </h2>

        <div className="text-gray-200 space-y-3 mb-8">
          <p>
            <span className="font-semibold text-yellow-400">Email:</span>{" "}
            {user.email}
          </p>
          <p>
            <span className="font-semibold text-yellow-400">User ID:</span>{" "}
            {user.id}
          </p>
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200"
          >
            Logout
          </button>
        </div>
      </div>
    </PageContainer>
  );
};

export default Profile;
