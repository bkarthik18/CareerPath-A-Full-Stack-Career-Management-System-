import React from "react";

const Dashboard = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1740&q=80')",
      }}
    >
      {/* ✅ Soft overlay for readability */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* ✅ Main Content */}
      <div className="relative z-10 text-center max-w-3xl px-8 py-10 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl">
        <h1 className="text-5xl font-extrabold text-yellow-400 mb-4 drop-shadow-lg">
          Welcome to CareerPath 💼
        </h1>
        <p className="text-lg text-gray-200 leading-relaxed mb-6">
          Your personal career assistant — helping you track applications,
          monitor progress, and grow professionally.  
        </p>
        <p className="text-gray-300 italic mb-8">
          “The future belongs to those who prepare for it today.”
        </p>

        <a
          href="/jobtracker"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300"
        >
          Get Started 🚀
        </a>
      </div>
    </div>
  );
};

export default Dashboard;
