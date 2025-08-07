"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const SliderComponent = () => {
  const slides = [
    "/images/slider1.jpg",
    "/images/slider2.jpg",
    "/images/slider3.jpg",
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // درست نوشته بشه
  };

  return (
    <div className="w-full mx-auto my-8" id="home">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <div className="relative w-full h-[500px]">
              <Image
                src={slide}
                alt={`slide-${index}`}
                fill
                className="rounded-3xl object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black opacity-30 rounded-3xl" />

              {/* متن اسلاید اول */}
              {index === 0 && (
                <div className="absolute inset-0 flex justify-center md:justify-start">
                  <div className="pl-0 sm:pl-20 h-full flex flex-col justify-center items-center space-y-4">
                    <span className="text-white text-5xl lg:text-7xl font-extrabold uppercase text-center">
                      Hot Offers
                    </span>
                    <span className="text-[#a91f64] text-6xl md:text-9xl font-bold text-center">
                      50%
                    </span>
                  </div>
                </div>
              )}

              {/* متن اسلاید دوم */}
              {index === 1 && (
                <div className="text-white absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold flex items-start">
                      New
                    </h2>
                    <h2 className="text-4xl sm:text-6xl lg:text-9xl font-light text-[#a91f64]">
                      Collection...
                    </h2>
                    <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold flex justify-end">
                      2025
                    </h2>
                  </div>
                </div>
              )}

              {/* متن اسلاید سوم */}
              {index === 2 && (
                <div className="absolute inset-0 flex items-center justify-center md:justify-end pr-10">
                  <div className="w-1/2 flex flex-col items-center space-y-3">
                    <span className="text-[#a91f64] text-7xl md:text-9xl font-extrabold leading-none uppercase text-center">
                      Deal
                    </span>
                    <span className="text-xl md:text-5xl font-semibold uppercase py-2 text-center bg-white text-black w-fit px-3 sm:px-4">
                      Of The Week
                    </span>
                    <span className="text-white text-sm md:text-base text-center">
                      Limited Time Only - Grab it Now
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
