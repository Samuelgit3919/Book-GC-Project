import React from "react";
import Service from "./Service";
import Trending from "./Trending";
import BestSeller from "./BestSeller";
import FlashSale from "./FlashSale";
import Testimonials from "./Testimonials";
import Subscribe from "./Subscribe";
import Footer from "../Footer/Footer";

const Pages = () => {
  return (
    <div>
      <Service />
      <Trending />
      <BestSeller />
      <FlashSale />
      <Testimonials />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Pages;
