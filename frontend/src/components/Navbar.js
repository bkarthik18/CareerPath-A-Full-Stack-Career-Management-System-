import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass =
    "px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-md";

  const activeClass =
    "bg-yellow-400 text-black shadow-md";

  const normalClass =
    "text-gray-200 hover:text-yellow-400 hover:bg-white/10";

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-md border-b border-white/20 shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
        <h1 className="text-2xl font-bold text-yellow-400">
          CareerPath 🚀
        </h1>

        <div className="flex space-x-3">
          <NavLink
            to="/register"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : normalClass}`
            }
          >
            Register
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : normalClass}`
            }
          >
            Login
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : normalClass}`
            }
          >
            Profile
          </NavLink>

          <NavLink
            to="/jobtracker"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : normalClass}`
            }
          >
            Job Tracker
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
