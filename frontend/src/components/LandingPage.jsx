import React from "react";
import { images, company, service, insights } from "../constants/images";
import HeroCarousel from "./HeroCarousel";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div className="landingPage">
        {/* creative section */}

        <section className="w-full flex flex-col lg:flex-row justify-between px-4 lg:px-0">
          <div className="w-full lg:w-3/5 flex flex-col font-uncut items-center justify-center">
            <div className="w-full lg:w-4/5 flex flex-col">
              <h2 className="text-4xl lg:text-6xl font-semibold text-gray-900 text-center lg:text-left">
                Your Creative Companion, Bringing Visions to Life
              </h2>
              <p className="text-2xl lg:text-4xl text-gray-600 mt-4 lg:mt-6 text-center lg:text-left">
                We turn brands into stars. Our creator network and tech-savvy
                approach boost your value in the digital world.
              </p>
              <Link to={"/contactus"}
                href="#"
                className="flex items-center justify-center border border-gray-800 w-full lg:w-[10rem] h-[3.5rem] mt-4 lg:mt-6 rounded-[45px] font-bold mx-auto lg:mx-0 hover:bg-slate-100 transition ease-in"
              >
                GET IN TOUCH
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-2/5 mt-6 lg:mt-0 flex justify-center lg:justify-center">
            <img
              src={images.image1}
              alt="image1"
              className="h-[300px] w-[300px] lg:h-[500px] lg:w-[500px] rounded-[50%] object-cover"
            />
          </div>
        </section>

        {/* About section */}

        <section className="w-full flex flex-col-reverse lg:flex-row justify-between mt-32 px-4 lg:px-0">
          <div className="w-full lg:w-2/5 flex justify-center mt-8 lg:mt-0">
            <img
              src={images.image2}
              alt="image2"
              className="h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px] rounded-full object-cover"
            />
          </div>
          <div className="w-full lg:w-3/5 flex flex-col font-uncut items-center justify-center">
            <div className="w-full lg:w-4/5 flex flex-col text-center lg:text-left">
              <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900">
                About Us
              </h2>
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mt-6">
                Based in the vibrant heart of Noida, India is not just a digital
                agency; we're your partners in creativity. Our mission is to
                turn your dreams into reality, one pixel at a time. With a
                diverse team of designers, developers, and innovators, we're
                constantly pushing the boundaries of what's possible in the
                digital world.
              </p>
            </div>
          </div>
        </section>

        {/* trusted brands section */}

        <section className="px-4 sm:px-8 lg:px-4">
          <div>
            <h2 className="text-center font-uncut text-5xl mt-28 font-semibold">
              Trusted Brands
            </h2>
            <div className="flex justify-center mt-10 sm:space-x-8 overflow-x-auto">
              <div className="flex flex-nowrap">
                {company.map((comp) => (
                  <div
                    key={comp.name}
                    className="flex-shrink-0 m-4 sm:m-6 hover:scale-110 transition ease-in cursor-pointer"
                  >
                    <img
                      src={comp.logo}
                      alt={`${comp.name} logo`}
                      className="h-[100px] w-[100px] sm:h-[140px] sm:w-[140px] lg:h-[130px] lg:w-[130px] object-cover rounded-full flex items-center justify-center"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}

        <section>
          <div className="mt-20">
            <h1 className="font-uncut text-5xl font-semibold text-center">
              Our Services
            </h1>
          </div>

          <div className="mt-20 container flex justify-center mx-auto px-4 sm:px-8 lg:px-16 font-uncut">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {service.map((item) => (
                <div
                  key={item.name}
                  className="rounded-lg shadow-md overflow-hidden w-[300px] hover:scale-105 transition ease-in"
                >
                  <div className="h-48 sm:h-64">
                    <img
                      src={item.image}
                      alt="image"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-2xl font-semibold mb-2">
                      {item.heading}
                    </h3>
                    <p className="text-gray-600 text-xl">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* reviews section */}

        <section className="text-center">
          <h1 className="font-uncut font-semibold text-5xl mt-20 mb-20">
            Reviews
          </h1>
          <div className="flex flex-col md:flex-row justify-center gap-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="w-full md:w-[47%] font-uncut text-xl rounded-lg shadow-md mb-10 md:mb-0">
              <p className="p-6 text-gray-800 text-left">
                I had the pleasure of working with Ivan on a recent project, and
                I was blown away by their creativity and attention to detail. I
                highly recommend Kreativy for anyone looking for a talented and
                professional designer.
              </p>
              <div className="flex items-center ml-4 mb-4">
                <img
                  src={images.review1}
                  alt="review1"
                  className="h-[80px] w-[80px] p-3 rounded-full"
                />
                <div className="flex flex-col ml-3">
                  <h3 className="text-md font-semibold text-left">
                    Jacob McDany
                  </h3>
                  <p className="text-sm text-gray-600 text-left">
                    CEO of Rackspace
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-[47%] font-uncut text-xl rounded-lg shadow-md">
              <p className="p-6 text-gray-800 text-left">
                Ivan's talent shines at Kreative. Their innovative designs
                consistently impress clients, elevating the agency's reputation.
                Ivan's creativity and expertise make them a standout in the
                design world.
              </p>
              <div className="flex items-center ml-4 mb-4">
                <img
                  src={images.review2}
                  alt="review2"
                  className="h-[80px] w-[80px] p-3 rounded-full"
                />
                <div className="flex flex-col ml-3">
                  <h3 className="text-md font-semibold text-left">John</h3>
                  <p className="text-sm text-gray-600 text-left">
                    CEO of Trapzo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* laptop section */}

        <section className="flex justify-center mt-28">
          <div className="flex justify-center w-full md:w-[80%] h-full md:h-[80%] px-4 md:px-0">
            <div className="relative w-full h-full">
              <img
                src={images.laptop}
                alt="Laptop Image"
                className="object-cover w-full h-full rounded-sm"
              />
              <div className="font-uncut vignette">
                <div className="absolute bottom-0 left-0 m-4 text-white mb-5">
                  <h2 className="text-3xl md:text-6xl font-thin">Weave.Inc</h2>
                  <p className="w-full md:w-[40%] text-sm md:text-xl text-gray-200 mt-2 md:mt-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="absolute bottom-0 right-0 m-4 text-white hidden md:grid grid-cols-2 gap-2 w-full md:w-auto ">
                  {[
                    "Branding Design",
                    "Website Design",
                    "App Design",
                    "Development",
                  ].map((service, index) => (
                    <div
                      key={index}
                      className="service-item bg-none p-2 md:p-4 text-xs md:text-sm"
                    >
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* case studies and insights section */}

        <section className="font-uncut">
          <div>
            <h1 className="text-4xl font-semibold mt-28 text-center">
              Our Case Studies And Insights
            </h1>
          </div>
          <div className="mt-10 container flex justify-center mx-auto px-4 sm:px-8 lg:px-16 font-uncut">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
              {insights.map((item, index) => (
                <div
                  key={index}
                  className="font-uncut rounded-lg shadow-md overflow-hidden w-full sm:w-[300px] hover:scale-105 transition ease-in cursor-pointer"
                >
                  <Link to={"/casestudiesdetails"}>
                    <div className="flex flex-col justify-between font-uncut p-4 h-full">
                      <div>
                        <h1 className="text-2xl font-semibold text-gray-900">
                          {item.heading}
                        </h1>
                        <p className="text-xl text-gray-600 mt-2">
                          {item.text}
                        </p>
                      </div>
                      <div className=" flex justify-between items-center p-4 mt-auto">
                        <p className="text-sm">2 min read Oct,21</p>
                        <p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                          >
                            <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
                          </svg>
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* carousel section */}

        <section className="mt-24">
          <HeroCarousel />
        </section>
      </div>
    </>
  );
};

export default LandingPage;
