import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen relative text-white font-poppins overflow-hidden">
      {/* ✅ Background layer stays mounted */}
      <div
        className="fixed inset-0 -z-10 bg-gradient-to-br from-blue-900 via-blue-700 to-indigo-900"
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, rgba(15, 23, 42, 0.9), rgba(0, 0, 0, 0.9)), url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1350&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      ></div>

      <Navbar />
      <div className="pt-24 px-4 transition-opacity duration-500 ease-in-out">
        {children}
      </div>
    </div>
  );
};

export default Layout;
