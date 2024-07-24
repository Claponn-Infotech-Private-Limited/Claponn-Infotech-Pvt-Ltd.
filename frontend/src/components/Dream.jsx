import React from "react";
import { images } from "../constants/images";

const Dream = () => {
  return (
    <div className="container mx-auto p-4">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
    </div>
  );
};

const FirstSection = () => {
  return (
    <div className="text-center mt-20 mb-28 font-uncut flex flex-col justify-center items-center px-4">
      <h1 className="text-3xl md:text-5xl font-semibold w-full md:w-3/4 lg:w-1/2">
        Mission: Turns Dreams into Reality in Digital World
      </h1>
      <p className="mt-6 text-lg md:text-2xl w-full md:w-3/4 lg:w-1/2 text-gray-600">
        Dream Realizers Inc., a cutting-edge tech startup, set out to
        revolutionize how people experience their dreams and imaginations in the
        digital realm.
      </p>
      <a
        href="#"
        className="flex justify-center items-center px-5 py-3 border border-gray-800 w-full md:w-auto h-[3.5rem] mt-6 rounded-[45px] font-bold mx-auto hover:bg-slate-100 transition ease-in"
      >
        GET IN TOUCH
      </a>
    </div>
  );
};

const SecondSection = () => {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row mb-8 lg:mb-16 font-uncut px-4 lg:px-[5rem]">
      <div className="md:w-3/5 p-4 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-semibold mb-6 md:mb-8 lg:ml-32">
          Challenges
        </h2>
        <div className="mt-2 w-full md:w-3/4 lg:w-1/2 mx-auto md:mx-0 lg:ml-32">
          {[
            "Problems the client faced in the media and telecommunications sector",
            "Traditional solutions weren't working",
            "Technology Constraints",
            "Turning Ideas into Reality",
          ].map((item, index) => (
            <div key={index} className="flex items-center mt-4 md:mt-2">
              <span className="mr-4 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 30 30"
                >
                  <path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z"></path>
                </svg>
              </span>
              <span className="text-lg md:text-2xl text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="md:w-2/5 p-4 flex justify-center md:justify-end">
        <img
          src={images.challenges}
          alt="Placeholder"
          className="w-64 h-64 md:w-80 md:h-80 rounded-lg lg:mr-40"
        />
      </div>
    </div>
  );
};

const ThirdSection = () => {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row mb-8 px-4">
      <div className="md:w-2/5 p-4 order-2 md:order-1 flex justify-center md:justify-start">
        <img
          src={images.approach}
          alt="Placeholder"
          className="w-64 h-64 md:w-80 md:h-80 lg:ml-48"
        />
      </div>
      <div className="md:w-3/5 p-4 order-1 md:order-2 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-semibold mb-6 md:mb-14 lg:ml-48">
          Our Approach
        </h2>
        <div className="mt-2 w-full md:w-3/4 lg:w-1/2 mx-auto md:mx-0 lg:ml-48">
          {[
            "Concept development process",
            "UX/UI design insights applied to the project",
            "Implementation of cutting-edge web development trends",
            "Collaboration between design and development teams",
          ].map((item, index) => (
            <div key={index} className="flex items-center mt-4 md:mt-2">
              <span className="mr-4 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 30 30"
                >
                  <path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z"></path>
                </svg>
              </span>
              <span className="text-lg md:text-2xl text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const results = [
  {
    heading: "40%",
    text: "Increase in user engagement across digital platforms",
  },
  {
    heading: "25%",
    text: "Reduction in customer support inquiries due to improved UX",
  },
  { heading: "50%", text: "Faster load times for web and mobile applications" },
  {
    heading: "30%",
    text: "Increase in customer retention rate/UI Insights from our expert team",
  },
];

const FourthSection = () => {
  return (
    <div className="text-center mb-8 font-uncut mt-20">
      <h2 className="text-3xl md:text-5xl font-semibold mb-10 md:mb-20">
        Results and Impacts
      </h2>
      <div className="flex flex-wrap justify-center px-4 md:px-20 lg:px-36">
        {results.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8"
          >
            <div className="w-full h-full shadow-md p-4 rounded">
              <h1 className="font-bold text-4xl md:text-6xl">{item.heading}</h1>
              <p className="mt-5 text-gray-600 text-lg md:text-xl">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const FifthSection = () => {
  return (
    <div className="flex flex-col md:flex-row mb-8 font-uncut mt-20 px-4 md:px-8 items-center md:items-start">
      <div className="md:w-2/5 p-4">
        <img
          src={images.caseStudies}
          alt="Placeholder"
          className="w-full lg:w-[500px] h-full lg:h-[500px] object-cover rounded-lg"
        />
      </div>
      <div className="md:w-3/5 p-4 mt-10 md:mt-0 md:ml-20 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-semibold">
          Designing for Humans
        </h2>
        <p className="mt-4 text-lg md:text-2xl">
          In this case study, we focused on creating a media and entertainment
          website that resonates with human users. Our goal is to enhance
          engagement, encourage exploration, and provide a seamless experience.
        </p>
        <div className="mt-4">
          <h3 className="font-semibold text-2xl md:text-3xl">
            Increased Engagement Metrics:
          </h3>
          <ul className="list-disc ml-4 md:ml-0 text-left md:text-left">
            <li className="text-lg md:text-xl mt-2">
              Achievement: Boosted average session duration by 30%.
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="font-semibold text-2xl md:text-3xl">
            Reduced Bounce Rate:
          </h3>
          <ul className="list-disc ml-4 md:ml-0 text-left md:text-left">
            <li className="text-lg md:text-xl mt-2">
              Achievement: Decreased bounce rate from 60% to 40%.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dream;
