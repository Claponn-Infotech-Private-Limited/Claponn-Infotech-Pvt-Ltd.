import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { images } from "../constants/images"; // Ensure you have your images imported correctly

const Footer = () => (
  <footer className="bg-[#191919] text-gray-200 py-8 font-uncut mt-10 h-screen md:h-1/2">
    <div className="container mx-auto px-6 md:px-12 lg:px-36 flex flex-col md:flex-row justify-between">
      {/* Company Logo Section */}
      <div className="mb-6 md:mb-0">
        <div className="flex flex-col items-center md:items-start">
          <img src={images.footer} alt="Company Logo" className="w-36 mb-6" />
          <div className="flex space-x-4 mb-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl text-gray-200 hover:text-pink-500 transition-colors duration-300" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl text-gray-200 hover:text-blue-500 transition-colors duration-300" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-2xl text-gray-200 hover:text-blue-700 transition-colors duration-300" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-2xl text-gray-200 hover:text-blue-400 transition-colors duration-300" />
            </a>
          </div>
          <button className="bg-white text-black py-2 px-4 rounded-3xl text-sm font-semibold mt-4">
            <Link to={"/contactus"}>GET IN TOUCH</Link>
          </button>
        </div>
      </div>
      {/* Menu and Corporates Section */}
      <div className="mb-6 md:mb-0 flex flex-col sm:grid sm:grid-cols-2 sm:space-x-10">
        <div className="mb-6 sm:mb-0">
          <h3 className="text-2xl font-semibold mb-4">Menu</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="#"
                className="text-gray-200 hover:text-gray-400 transition-colors duration-300"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-200 hover:text-gray-400 transition-colors duration-300"
              >
                CASE STUDIES
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-200 hover:text-gray-400 transition-colors duration-300"
              >
                SERVICES
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-200 hover:text-gray-400 transition-colors duration-300"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-6 sm:mb-0">
          <h3 className="text-2xl font-semibold mb-4">Corporates</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="#"
                className="text-gray-200 hover:text-gray-400 transition-colors duration-300"
              >
                CAREERS
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-200 hover:text-gray-400 transition-colors duration-300"
              >
                PRIVACY POLICY
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-200 hover:text-gray-400 transition-colors duration-300"
              >
                TERMS AND CONDITIONS
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Contact Us Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
        <ul className="space-y-3 text-sm">
          <li className="flex items-center">
            <FaPhone className="mr-2" />
            <a
              href="tel:+1234567890"
              className="text-gray-200 hover:text-gray-400 transition-colors duration-300"
            >
              +91 9536067060
            </a>
          </li>
          <li className="flex items-center">
            <FaEnvelope className="mr-2" />
            <a
              href="mailto:info@company.com"
              className="text-gray-200 hover:text-gray-400 transition-colors duration-300"
            >
              info@claponn.com
            </a>
          </li>
          <li className="flex items-center">
            <FaMapMarkerAlt className="mr-2" />
            <span className="text-gray-200 hover:text-gray-400 transition-colors duration-300">
              Plot No. 19, Greater Noida, India
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div className="container mx-auto px-6 md:px-12 lg:px-36 mt-10 border-b border-white"></div>
    <div className="text-sm flex items-center justify-center text-center mt-11 md:mt-6">
      <p>
        All Rights Reserved. Copyright© 2024 Claponn Infotech Private Limited.
      </p>
    </div>
  </footer>
);

export default Footer;
