import React from "react";
import Slider from "react-slick";
import slider1 from "../../assets/slider1.png";
import slider2 from "../../assets/slider2.png";
import slider3 from "../../assets/slider3.png";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";

function MainCarousel() {
  const images = [
    slider1,
    slider2,
    slider3,
    slider1,
    slider2,
    slider3,
    slider1,
    slider2,
    slider3,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full lg:max-w-[50%] px-2 mx-auto">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className="p-[5px] overflow-hidden w-full mx-auto rounded-xl relative group"
          >
            <img
              src={image}
              alt={`Slider ${index + 1}`}
              className="h-full w-full mx-auto object-cover rounded-xl hover:scale-105 duration-300 ease-linear"
            />
            <div className="absolute top-2 right-2 flex gap-2"></div>

            <div className="absolute w-full h-16 text-black bottom-0 left-0 bg-orange-300 opacity-90 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex items-center justify-between px-3">
              <button className=" py-2 font-semibold">Buy Now</button>
              <div className="flex gap-2">
                <IoCartOutline
                  className="text-white bg-black p-2 rounded-full cursor-pointer"
                  size={34}
                />
                <IoMdHeartEmpty
                  className="text-white bg-black p-2 rounded-full cursor-pointer"
                  size={34}
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MainCarousel;
