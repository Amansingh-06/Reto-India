import React from "react";
import ProductPage from "./Components/ProductPage";
import MainCarousel from "./Components/Carousal/MainCarousel";
import Navbar from "./Components/Header/Navbar";
import { useState } from "react";

const App = () => {

  const [cartPage, SetCartPage] = useState(false)
  console.log(cartPage)
  return (
    <>
      <Navbar setcartpage={SetCartPage} cartPage={cartPage} />
    <div className="background py-12 bg-cover bg-no-repeat bg-center min-h-lvh space-y-10 ">
      
      <h2 className="md:text-2xl text-black text-center font-semibold">
        3 Slides 3 Product Each
      </h2>
      <MainCarousel />
      <h2 className="md:text-2xl text-black text-center font-semibold">
        5 Slides 3 Product Each
      </h2>

      <ProductPage />
      </div>
    </>
  );
};

export default App;
