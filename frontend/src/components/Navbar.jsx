import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { images } from "../constants/images";

// Logo Component
const Logo = ({ src, alt }) => {
  return (
    <div className="logo h-[60px] w-[230px]">
      <img src={src} alt={alt} className="object-cover h-full w-full" />
    </div>
  );
};

// Navigation Links Component
const NavLinks = ({ links, isMobile }) => {
  return (
    <div
      className={`nav ${
        isMobile ? "flex flex-col" : "flex items-center gap-4"
      } font-uncut font-semibold`}
    >
      {links.map((link, index) => (
        <NavLink
          key={index}
          to={link.href}
          className={({ isActive }) =>
            isActive
              ? "text-blue-600" // Active link color
              : "text-black hover:text-gray-600 transition-all ease-in"
          }
        >
          {link.text}
        </NavLink>
      ))}
    </div>
  );
};

// Navbar Component
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { href: "/", text: "HOME" },
    { href: "/services", text: "SERVICES" },
    { href: "/casestudies", text: "CASE STUDIES" },
    { href: "/aboutus", text: "ABOUT US" },
    { href: "/contactus", text: "CONTACT US" },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#f8f8f8] border-b border-gray-300 mb-40">
        <div className="container flex flex-col md:flex-row justify-between px-4 md:px-[73px] py-4 md:py-[22px] items-center">
          <div className="flex justify-between items-center w-full md:w-auto">
            <Logo src={images.logo} alt="claponn" />
            <button
              className="md:hidden text-3xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              &#9776;
            </button>
          </div>
          <div
            className={`mt-4 md:mt-0 ${
              isMobileMenuOpen ? "block" : "hidden"
            } md:flex`}
          >
            <NavLinks links={links} isMobile={isMobileMenuOpen} />
          </div>
        </div>
      </div>
      <div className="mt-[150px]"></div> {/* Adjust the height as needed */}
    </>
  );
};

export default Navbar;
