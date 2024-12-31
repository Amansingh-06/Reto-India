import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
                    dots:false,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots:false,
                },
            },
        ],
    };

    const products = [
        { id: 1, name: "Sofa", price: "INR 1000", image: "http://pluspng.com/img-png/couch-hd-png-sofa-1400.png" },
        { id: 2, name: "Chair", price: "INR 800", image: "https://freepngimg.com/thumb/chair/3-2-chair-transparent.png" },
        { id: 3, name: "Table", price: "INR 1500", image: "https://freepngimg.com/thumb/table/18-table-png-image.png" },
        { id: 4, name: "Lamp", price: "INR 500", image: "https://www.freeiconspng.com/uploads/lamp-png-31.png" },
        { id: 5, name: "Bed", price: "INR 3000", image: "http://pngimg.com/uploads/bed/bed_PNG17401.png" },
        { id: 6, name: "Cushion", price: "INR 200", image: "https://static.vecteezy.com/system/resources/previews/022/697/841/non_2x/green-cushion-isolated-on-a-transparent-background-png.png" },
        { id: 7, name: "Shelf", price: "INR 1200", image: "https://www.pngall.com/wp-content/uploads/5/Wood-Shelves-PNG-Pic.png" },
        { id: 8, name: "Mirror", price: "INR 900", image: "http://clipart-library.com/image_gallery2/Mirror-Free-Download-PNG.png" },
        { id: 9, name: "Cabinet", price: "INR 2500", image: "https://freepngimg.com/thumb/aquarium/42830-6-cabinet-free-transparent-image-hd.png" },
        { id: 10, name: "Rug", price: "INR 700", image: "https://tse4.mm.bing.net/th?id=OIP.9wZ42CszX5gV75zZ33lWmwHaHa&pid=Api&P=0&h=180" },
        { id: 11, name: "Curtains", price: "INR 600", image: "https://tse3.mm.bing.net/th?id=OIP.z3tjkk3zkLzV-Yj9-hwZ_AAAAA&pid=Api&P=0&h=180" },
        { id: 12, name: "Desk", price: "INR 1700", image: "http://www.pngmart.com/files/7/Computer-Desk-Transparent-Background.png" },
        { id: 13, name: "Stool", price: "INR 300", image: "https://tse1.mm.bing.net/th?id=OIP.h2j-hYkFKRqjT4_QerJvFQHaFd&pid=Api&P=0&h=180" },
        { id: 14, name: "Clock", price: "INR 400", image: "https://tse2.mm.bing.net/th?id=OIP.V6F8OI_tzNZS22wUuhi0LAHaHa&pid=Api&P=0&h=180" },
        { id: 15, name: "Painting", price: "INR 2000", image: "http://www.pngmart.com/files/7/Abstract-Art-PNG-Transparent-Image.png" },
    ];

    return (
        <div className="bg-gray-200 bg-[url('https://i.pinimg.com/736x/42/bb/78/42bb78c1f0aff0b0090554f26d2d9a5a.jpg')] bg-cover bg-no-repeat bg-center min-h-screen flex items-center justify-center">
            <div className="w-2/3 bg-white/20 rounded-lg shadow-lg backdrop-blur-sm border border-white/30 p-6">
                <h1 className="text-3xl font-bold font-bricolage text-center mb-8">Trending Products</h1>
                <Slider {...settings}>
                    {
                        products.map((items) => (
                            <div className="px-4">
                                <div className="bg-[linear-gradient(462deg,_#fdf2e3_51%,_#ffd39c_70%)] text-black rounded-lg shadow-md p-6 flex flex-col items-center justify-center text-center h-72">
                                    <img src={items.image} alt={items.name} className="mb-4 w-32 h-32" />
                                    <p className="text-xl font-semibold">{items.name}</p>
                                    <p className="text-lg">{ items.price}</p>
                                    <button className="bg-red-600 hover:bg-red-800 text-white py-2 px-4 rounded mt-4">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        ))
                    }


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
