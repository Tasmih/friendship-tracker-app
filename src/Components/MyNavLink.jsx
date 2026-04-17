import React from "react";
import { NavLink } from "react-router";

const MyNavLink = ({ to, children, onClick }) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300
        ${
          isActive
            ? "bg-emerald-900 text-white"
            : "text-gray-500 hover:bg-green-300 hover:text-gray-900"
        }`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyNavLink;