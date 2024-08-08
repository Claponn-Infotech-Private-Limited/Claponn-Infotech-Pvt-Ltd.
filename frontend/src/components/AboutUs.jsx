import React from "react";
import { specialities, images } from "../constants/images";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="font-uncut mt-10 px-4 md:px-8 lg:px-16 overflow-x-hidden">
      <div className="text-center mb-8 flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-5xl font-semibold">
          Most Diverse Creator Hub
          <br />
          Ever Seen.
        </h1>
        <p className="text-lg md:text-2xl text-gray-600 w-full md:w-3/4 lg:w-[55%] mt-4 md:mt-8">
          Claponn Media is an Advertisement Agency, working with multiple
          creators and influencers to make brands more valuable. Claponn Media
          is dedicated to adding values to brands with modern strategies and
          proven technology advancements.
        </p>
        <Link
          to={"/contactus"}
          href="#"
          className="flex justify-center items-center px-4 py-3 border border-gray-800 w-full md:w-auto lg:w-[10rem] h-[3.5rem] mt-4 lg:mt-6 rounded-[45px] font-bold mx-auto lg:mx-0 hover:bg-slate-100 transition ease-in"
        >
          GET IN TOUCH
        </Link>
      </div>

      <div className="container mx-auto">
        <div className="text-center mb-8 mt-24">
          <h3 className="text-3xl md:text-5xl font-semibold">Specialties</h3>
          <p className="mt-4 md:mt-6 text-lg md:text-2xl text-gray-600">
            We are working with multiple brands globally to make them more
            valuable with <br className="hidden md:block" /> our strong creator
            base.
          </p>
          <div className="mt-12 md:mt-20 flex justify-center px-4 sm:px-8 lg:px-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {specialities.map((item) => (
                <div
                  key={item.name}
                  className="rounded-lg shadow-md overflow-hidden hover:scale-105 transition ease-in"
                >
                  <div className="h-48 sm:h-64">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl md:text-2xl font-semibold mb-2">
                      {item.heading}
                    </h3>
                    <p className="text-gray-600 text-base md:text-xl">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="text-center font-semibold text-3xl md:text-5xl mt-20 lg:mt-28">
        <h1>Our Founder</h1>
      </div>
      <section className="w-full flex flex-col-reverse lg:flex-row justify-between mt-10 lg:mt-20 px-4 lg:px-0 lg:ml-28">
        <div className="w-full lg:w-2/5 flex justify-center mt-8 lg:mt-0">
          <img
            src={images.founder}
            alt="review"
            className="h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[400px] lg:w-[400px] rounded-full object-cover"
          />
        </div>
        <div className="w-full lg:w-3/5 flex flex-col items-center lg:items-start justify-center lg:ml-16">
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mt-6">
              Mayank Agarwal completed his Bachelor’s of Technology from NIET
              and furthered his education at Harvard University, focusing on
              Entrepreneurship and Innovation. He founded Claponn Infotech with
              the vision of delivering innovation in software and marketing.
              Having established a strong service portfolio, the company is now
              expanding into products, specifically targeting the mental health
              and fitness sectors.
            </p>
          </div>
        </div>
      </section>

      <div className="text-center mb-8 mt-20">
        <div className="text-center mb-8 flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-5xl font-semibold">Join Us</h1>
          <p className="mt-4 md:mt-8 text-lg md:text-2xl text-gray-700 mb-8">
            Whether you're a content creator, marketing guru, tech enthusiast,
            or media specialist, <br className="hidden md:block" /> there's a
            place for you here.
          </p>
          <Link
            to={"/contactus"}
            href="#"
            className="flex justify-center items-center px-4 py-3 border border-gray-800 w-full md:w-auto lg:w-[10rem] h-[3.5rem] mt-4 lg:mt-3 rounded-[45px] font-bold mx-auto lg:mx-0 hover:bg-slate-100 transition ease-in"
          >
            GET IN TOUCH
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
