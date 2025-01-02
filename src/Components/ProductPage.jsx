import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductData } from "../Data/AllData.json";
const ProductPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-2/3 bg-white/20 rounded-lg shadow-lg md:backdrop-blur-sm border border-white/30 p-6">
        <h1 className="text-3xl font-bold font-bricolage text-center mb-8">
          Trending Products
        </h1>
        <Slider {...settings}>
          {ProductData.map((items , id) => (
            <div className="px-4" key={id}>
              <div className="bg-[linear-gradient(462deg,_#fdf2e3_51%,_#ffd39c_70%)] text-black rounded-lg shadow-md p-6 flex flex-col items-center justify-center text-center h-72">
                <img
                  src={items.image}
                  alt={items.name}
                  className="mb-4 w-32 h-32"
                />
                <p className="text-xl font-semibold">{items.name}</p>
                <p className="text-lg">{items.price}</p>
                <button className="bg-red-600 hover:bg-red-800 text-white py-2 px-4 rounded mt-4">
                  Buy Now
                </button>
              </div>
            </div>
          ))}

          {/* <div className="px-4">
                        <div className="bg-blue-500 text-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center text-center h-72">
                            <img src="https://via.placeholder.com/150" alt="Sofa" className="mb-4" />
                            <p className="text-xl font-semibold">Sofa</p>
                            <p className="text-lg">INR 1000</p>
                            <button className="bg-red-600 hover:bg-red-800 text-white py-2 px-4 rounded mt-4">
                                Buy Now
                            </button>
                        </div>
                    </div>
                    <div className="px-4">
                        <div className="bg-green-500 text-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center text-center h-72">
                            <img src="https://via.placeholder.com/150" alt="Chair" className="mb-4" />
                            <p className="text-xl font-semibold">Chair</p>
                            <p className="text-lg">INR 800</p>
                            <button className="bg-red-600 hover:bg-red-800 text-white py-2 px-4 rounded mt-4">
                                Buy Now
                            </button>
                        </div>
                    </div> */}
        </Slider>
      </div>
    </div>
  );
};

export default ProductPage;
