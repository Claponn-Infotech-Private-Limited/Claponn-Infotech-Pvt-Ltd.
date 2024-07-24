import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { heroImages } from "../constants/images";

const HeroCarousel = () => {
  return (
    <div className="w-full px-4 md:px-12 lg:px-24">
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={1800}
        showArrows={false}
        showStatus={false}
      >
        {heroImages.map((obj, index) => (
          <div className="font-uncut w-full flex flex-col md:flex-row justify-center mb-10">
            <div className="w-full md:w-1/3 flex justify-center md:justify-end mb-4 md:mb-0">
              <img
                src={obj.imageUrl}
                alt={index}
                key={index}
                className="w-full md:w-[300px] h-[400px] object-contain bg-[#e7e7e7] p-6"
              />
            </div>
            <div className="w-full md:w-2/3 flex flex-col text-left px-4 md:px-10">
              <h1 className="text-3xl md:text-5xl font-semibold w-full">
                Recognised by Government Start-up Agencies, Start-up India and
                DPIIT
              </h1>
              <p className="text-lg md:text-2xl text-gray-700 mt-4">
                Ivan's talent shines at Kreative. Their innovative designs
                consistently impress clients, elevating the agency's reputation.
                Ivan's creativity and expertise make them a standout in the
                design world, contributing significantly to Kreativy's success.
              </p>
              <p className="border border-black w-[120px] h-[40px] flex items-center justify-center rounded-[2rem] p-2 mt-6 cursor-pointer">
                Learn More
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
