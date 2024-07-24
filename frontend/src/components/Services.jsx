import React from "react";
import { images } from "../constants/images";

const Services = () => {
  return (
    <>
      <div className="flex justify-center items-center py-8">
        <div className="flex flex-col justify-center items-center font-uncut text-center w-full lg:w-[80%] px-4 lg:px-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
            Empowering Your Business Growth
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 w-full lg:w-[80%] mt-4">
            At Claponn Company, we offer comprehensive services to elevate your
            brand, streamline operations, and amplify market presence. Our
            integrated approach drives business growth in today's dynamic
            marketplace.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center p-4 lg:p-8 font-uncut">
        <div className="w-full lg:w-1/2 flex justify-center mb-4 lg:mb-0">
          <img
            src={images.brand}
            alt="Brand Solutions"
            className="w-full h-auto max-w-xs lg:max-w-md"
          />
        </div>
        <div className="w-full lg:w-1/2 lg:ml-48 text-center lg:text-left flex flex-col items-center lg:items-start">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Brand Solutions
          </h2>
          <ul className="list-disc pl-5 text-lg space-y-2 mb-6 text-center lg:text-left">
            <li>Social Media Management</li>
            <li>Original Content Writing</li>
            <li>Video Shoot and Editing</li>
            <li>Campaign Designing</li>
            <li>Brand Launch & Rebranding</li>
            <li>Product Photography</li>
            <li>Influencer Marketing</li>
          </ul>
          <a
            href="#"
            className="inline-block px-5 py-3 border border-gray-800 rounded-[45px] font-bold hover:bg-slate-100 transition ease-in"
          >
            Get Started
          </a>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center p-4 lg:p-8 font-uncut">
        <div className="w-full lg:w-1/2 lg:px-40 text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-1">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Technology Solutions
          </h2>
          <ul className="list-disc pl-5 text-lg space-y-2 mb-6 text-center lg:text-left">
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>Search Engine Optimization</li>
            <li>UI/UX</li>
            <li>CRM/ERP Solutions</li>
            <li>E-Commerce Stores</li>
            <li>Email Marketing</li>
            <li>Chatbots</li>
          </ul>
          <a
            href="#"
            className="inline-block px-5 py-3 border border-gray-800 rounded-[45px] font-bold hover:bg-slate-100 transition ease-in"
          >
            Get Started
          </a>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center mb-4 lg:mb-0 order-1 lg:order-2">
          <img
            src={images.technology}
            alt="Technology Solutions"
            className="w-full h-auto max-w-xs lg:max-w-md"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center p-4 lg:p-8 font-uncut">
        <div className="w-full lg:w-1/2 flex justify-center mb-4 lg:mb-0">
          <img
            src={images.media}
            alt="Media Solutions"
            className="w-full h-auto lg:h-full object-cover max-w-xs lg:max-w-md"
          />
        </div>
        <div className="w-full lg:w-1/2 lg:ml-40 text-center lg:text-left flex flex-col items-center lg:items-start">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Media Solutions
          </h2>
          <ul className="list-disc pl-5 text-lg space-y-2 mb-6 text-center lg:text-left">
            <li>Media Buying</li>
            <li>Performance Marketing</li>
            <li>Public Relations</li>
            <li>3D Designing</li>
          </ul>
          <a
            href="#"
            className="inline-block px-5 py-3 border border-gray-800 rounded-[45px] font-bold hover:bg-slate-100 transition ease-in"
          >
            Get Started
          </a>
        </div>
      </div>
    </>
  );
};

export default Services;
