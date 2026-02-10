"use client";

import Image from "next/image";
import React from "react";

const ProfileLoggedIn = () => {
  const handleLogout = () => {
    console.log("User logged out");
    // add logout logic here
  };

  return (
    <div className="dropdown dropdown-end">
      {/* Avatar Button */}
      <button
        tabIndex={0}
        className="btn btn-ghost btn-circle avatar"
        aria-label="User menu"
      >
        <div className="w-10 rounded-full">
          <Image
          className="rounded-full"
            fill
            alt="User Avatar"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </button>

      {/* Dropdown Menu */}
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-36 p-2 shadow text-black"
      >
        <li>
          <button className="justify-between w-full">
            Profile
            {/* <span className="badge badge-primary">New</span> */}
          </button>
        </li>

        <li>
          <button className="w-full">Settings</button>
        </li>

        <li>
          <button
            onClick={handleLogout}
            className="w-full text-error"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};


export default ProfileLoggedIn;
