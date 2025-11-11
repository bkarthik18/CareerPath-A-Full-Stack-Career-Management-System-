import React from "react";

const PageContainer = ({ children }) => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center text-white relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1740&q=80')", // 💻 Professional laptop background
      }}
    >
      {/* Overlay for glassy dark tint */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      {/* Content area (centered glass box) */}
      <div className="relative z-10 w-full max-w-lg bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl text-center">
        {children}
      </div>
    </div>
  );
};

export default PageContainer;
