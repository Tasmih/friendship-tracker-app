import React, { useState } from "react";
import logoImg from "../../assets/Images/logo.png";
import MyNavLink from "../MyNavLink";

import { RiHome2Line } from "react-icons/ri";
import { IoTimeOutline } from "react-icons/io5";
import { ImStatsDots } from "react-icons/im";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    {
      path: "/",
      text: "Home",
      icon: <RiHome2Line size={18} />,
    },
    {
      path: "/timeline",
      text: "Timeline",
      icon: <IoTimeOutline size={18} />,
    },
    {
      path: "/stats",
      text: "Stats",
      icon: <ImStatsDots size={18} />,
    },
  ];

  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">

        {/* Logo */}
        <img src={logoImg} alt="logo" className="w-[140px]" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-3">
          {navItems.map((item, index) => (
            <li key={index}>
              <MyNavLink to={item.path}>
                <span className="flex items-center gap-2">
                  {item.icon}
                  {item.text}
                </span>
              </MyNavLink>
            </li>
          ))}
        </ul>

        {/* for mobile btn */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* for mobile menu */}
      {open && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <MyNavLink
                  to={item.path}
                  onClick={() => setOpen(false)}
                >
                  <span className="flex items-center gap-2">
                    {item.icon}
                    {item.text}
                  </span>
                </MyNavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;