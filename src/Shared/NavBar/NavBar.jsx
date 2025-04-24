import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navOption = (
    <>
      <li className="text-xl text-white">
        <Link to="/"> Home </Link>
      </li>
      <li className="text-xl text-white">
        <Link to="/product">Product</Link>
      </li>
      {/* <li className="text-xl text-white">
        <a>Mission</a>
      </li> */}
    </>
  );
  return (
    <div>
      <div className="navbar bg-[rgb(116,28,71)] text-white shadow-sm">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navOption}
            </ul>
          </div>
          {/* <a className="btn btn-ghost text-xl">IWMS</a> */}

          <h2 className="text-xl">Eplyllon Fashion</h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOption}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Login</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
