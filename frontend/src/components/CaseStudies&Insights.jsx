import React from "react";
import { images } from "../constants/images";

const CaseStudiesInsights = () => {
  const results = [
    {
      heading: "40%",
      text: "increase in social media engagement",
    },
    {
      heading: "25%",
      text: "growth in follower base across platforms",
    },
    {
      heading: "50%",
      text: "increase in website traffic from social media",
    },
  ];

  return (
    <>
      <div className="font-uncut text-center px-4">
        <h1 className="text-3xl sm:text-5xl font-semibold mb-3">
          Case Study-1
        </h1>
        <h2 className="text-2xl sm:text-4xl font-semibold mb-2">Kia Ind.</h2>
        <p className="text-lg sm:text-xl text-gray-700">
          Social Media & Content Creation
        </p>
      </div>
      <div className="px-4 text-center lg:mt-10">
        <h1 className="text-2xl sm:text-4xl font-semibold font-uncut">
          Overview
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 font-uncut lg:w-[70%] lg:ml-48 lg:mt-6">
          Kia Ind, a leading automobile manufacturer, sought to enhance its
          digital presence and engage with a younger, tech-savvy audience in the
          competitive Indian market.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center md:flex-row mb-8 lg:mb-16 font-uncut px-4 lg:px-[5rem] lg:mt-20">
        <div className="md:w-3/5 p-4 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-6 md:mb-8 lg:ml-32">
            Challenge
          </h2>
          <div className="mt-2 w-full md:w-3/4 lg:w-1/2 mx-auto md:mx-0 lg:ml-32">
            {[
              "Define Kia's core brand values and Personality globally",
              "Highlight region-specific Kia models and features",
              "Create content that resonates with local interests and lifestyles",
              "Adapt global campaigns for local relevance",
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
                <span className="text-lg sm:text-xl md:text-2xl text-gray-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-2/5 p-4 flex justify-center md:justify-end">
          <img
            src={images.challenge}
            alt="Challenge"
            className="w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-lg lg:mr-40"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center md:flex-row mb-8 lg:mb-16 font-uncut px-4 lg:px-[5rem]">
        <div className="md:w-2/5 p-4 flex justify-center md:justify-end">
          <img
            src={images.solution}
            alt="Solution"
            className="w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-lg lg:mr-40"
          />
        </div>
        <div className="md:w-3/5 p-4 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-6 md:mb-8 lg:ml-32">
            Solution
          </h2>
          <div className="mt-2 w-full md:w-3/4 lg:w-1/2 mx-auto md:mx-0 lg:ml-32">
            {[
              "Comprehensive social media management across platforms",
              "Development of India-specific content strategy",
              "Creation of original, visually appealing content",
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
                <span className="text-lg sm:text-xl md:text-2xl text-gray-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center md:flex-row mb-8 lg:mb-16 font-uncut px-4 lg:px-[5rem]">
        <div className="md:w-3/5 p-4 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-6 md:mb-8 lg:ml-32">
            Process
          </h2>
          <div className="mt-2 w-full md:w-3/4 lg:w-1/2 mx-auto md:mx-0 lg:ml-32">
            {[
              "Content calendar development",
              "Original content creation (images, videos, infographics)",
              "Performance tracking and optimization",
              "Community management and engagement",
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
                <span className="text-lg sm:text-xl md:text-2xl text-gray-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-2/5 p-4 flex justify-center md:justify-end">
          <img
            src={images.process}
            alt="Process"
            className="w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-lg lg:mr-40"
          />
        </div>
      </div>

      <div className="p-4 lg:p-20 font-uncut">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-6 md:mb-8 text-center">
          Results
        </h2>
        <div className="flex flex-col md:flex-row justify-around items-center lg:mt-10">
          {results.map((result, index) => (
            <div
              key={index}
              className="text-center md:w-1/3 md:p-4 mb-8 md:mb-0"
            >
              <h2 className="text-4xl sm:text-6xl md:text-8xl text-black font-semibold">
                {result.heading}
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mt-2 md:mt-4">
                {result.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CaseStudiesInsights;
