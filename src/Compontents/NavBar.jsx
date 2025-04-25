import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const themeController = (e) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  const links = (
    <>
      <li>
        <NavLink to="/" className="text-lg font-medium hover:text-primary transition duration-300">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/services" className="text-lg font-medium hover:text-primary transition duration-300">
          Services
        </NavLink>
      </li>
      <li className="relative dropdown">
        <label
          tabIndex={0}
          className="text-lg font-medium hover:text-primary transition duration-300 cursor-pointer"
        >
          Dashboard
        </label>
        <ul
          tabIndex={0}
          className="absolute left-0 top-full mt-2 p-4 shadow-lg bg-white dark:bg-gray-800 rounded-lg space-y-2 w-52 z-50"
        >
          <li>
            <NavLink to="/addAService" className="hover:text-primary transition">Add Services</NavLink>
          </li>
          <li>
            <NavLink to="/manageService" className="hover:text-primary transition">Manage Services</NavLink>
          </li>
          <li>
            <NavLink to="/bookServices" className="hover:text-primary transition">Booked Services</NavLink>
          </li>
          <li>
            <NavLink to="/serviceToDo" className="hover:text-primary transition">Service To Do</NavLink>
          </li>
        </ul>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-white/30 dark:bg-gray-900/30 shadow-md">
      <div className="navbar container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left - Logo and Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost p-2">
              <svg
                className="w-6 h-6 text-gray-700 dark:text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 p-4 shadow-lg bg-white dark:bg-gray-800 rounded-lg space-y-2"
            >
              {links}
            </ul>
          </div>

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-tight text-gray-800 dark:text-white">
            LAW
          </Link>
        </div>

        {/* Center - Desktop Menu */}
        <div className="hidden lg:flex">
          <ul className="menu-horizontal flex gap-8 items-center">{links}</ul>
        </div>

        {/* Right - Theme Toggle & User/Profile */}
        <div className="flex items-center gap-4">
          {/* Theme Switch */}
          <label className="cursor-pointer flex items-center gap-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">🌞</span>
            <input
              type="checkbox"
              className="toggle toggle-sm"
              onChange={themeController}
              checked={theme === "dark"}
            />
            <span className="text-sm text-gray-600 dark:text-gray-400">🌜</span>
          </label>

          {/* User Profile */}
          {user && user.email ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full ring-2 ring-primary ring-offset-2">
                  <img src={user.photoURL} alt="User Avatar" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu dropdown-content mt-3 p-4 shadow-lg bg-white dark:bg-gray-800 rounded-lg space-y-2 w-52"
              >
                <li><span className="hover:text-primary transition">Profile</span></li>
                <li><span className="hover:text-primary transition">Settings</span></li>
                <li><button onClick={logOut} className="hover:text-red-500 transition">Logout</button></li>
              </ul>
            </div>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 rounded-full bg-primary text-white hover:bg-primary-focus transition text-sm"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
