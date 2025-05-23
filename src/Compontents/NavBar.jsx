import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import Sticky from "react-stickynode";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const themeController = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else setTheme("light");
  };

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/services"}>Services</NavLink>
      </li>
      <li>
        <details>
          <summary>Dashboard</summary>
          <ul className="p-2 w-80 z-50">
            <li>
              <NavLink to={"/addAService"}>Add Services</NavLink>
            </li>
            <li>
              <NavLink to={"/manageService"}>Manage Services</NavLink>
            </li>
            <li>
              <NavLink to={"/bookServices"}>Booked-Services</NavLink>
            </li>
            <li>
              <NavLink to={"/serviceToDo"}>Service to Do</NavLink>
            </li>
          </ul>
        </details>
      </li>
    </>
  );

  return (
    <div style={{ position: "sticky", top: 0 }} className="bg-gradient-to-r from-teal-500 to-cyan-500 z-50">
      <div className="navbar w-11/12 mx-auto p-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 p-2 shadow-xl"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="text-3xl font-bold text-white">
            LAW
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-4 space-x-8 text-white">{links}</ul>
        </div>

        <input
          onChange={themeController}
          type="checkbox"
          checked={theme === "light" ? false : true}
          value="synthwave"
          className="toggle theme-controller"
        />

        <div className="navbar-end flex items-center space-x-4">
          {user && user?.email ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Profile"
                    src={user?.photoURL}
                    className="object-cover"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow-lg z-50"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={logOut}>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <Link className="btn btn-primary" to={"/login"}>
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
