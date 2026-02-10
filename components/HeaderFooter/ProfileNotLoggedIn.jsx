import React from "react";
import { CgProfile } from "react-icons/cg";

const ProfileNotLoggedIn = () => {
  return (
    <div className="dropdown dropdown-end">
      {/* Trigger Button */}
      <button
        tabIndex={0}
        aria-label="Account"
        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white/40 sm:h-10 sm:w-10"
      >
        <CgProfile className="text-lg text-white" />
      </button>

      {/* Dropdown */}
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-36 p-2 shadow
        text-black"
      >
        <li>
          <button className="w-full">Login</button>
        </li>
        <li>
          <button className="w-full">Register</button>
        </li>
      </ul>
    </div>
  );
};

export default ProfileNotLoggedIn;
