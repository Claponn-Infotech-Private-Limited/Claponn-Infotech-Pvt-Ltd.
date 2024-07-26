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
        isMobile ? "flex flex-col space-y-4 mt-8" : "navbar-links"
      }`}
    >
      {links.map((link, index) => (
        <NavLink
          key={index}
          to={link.href}
          className={({ isActive }) =>
            isActive ? "active" : "hover:text-gray-600 transition-all ease-in"
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
      <div className="navbar-container fixed top-0 left-0 right-0 z-50">
        <div className="navbar-logo">
          <Logo src={images.logo} alt="claponn" />
          <button
            className="navbar-toggle md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            &#9776;
          </button>
        </div>
        <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
          <button
            className="close-button md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            &times;
          </button>
          <NavLinks links={links} isMobile={isMobileMenuOpen} />
        </div>
        <div className="navbar-links hidden md:flex">
          <NavLinks links={links} isMobile={false} />
        </div>
      </div>
      <div className="mt-[150px]"></div> {/* Adjust the height as needed */}
    </>
  );
};

export default Navbar;
