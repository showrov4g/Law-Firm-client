import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const links = (
    <>
       <li><NavLink to={"/"}>Home</NavLink></li>
       <li><NavLink to={"/services"}>services</NavLink></li>
      <li>
        <details>
          <summary>Dashboard</summary>
          <ul className="p-2 w-80 z-50">
            <li><NavLink to={"/addAService"}>Add Services</NavLink></li>
            <li><NavLink to={'/manageService'}>Manage Services</NavLink></li>
            <li><NavLink to={'/bookServices'}>Booked-Services</NavLink></li>
            <li><NavLink to={'/serviceToDo'}>Service to do</NavLink></li>
          </ul>
        </details>
      </li>
    </>
  );
  return (
    <div className="navbar bg-gray-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">LAW</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user && user?.email ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
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
          <Link className="btn" to={"/login"}>
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
