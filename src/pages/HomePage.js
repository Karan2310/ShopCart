import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Filters from "../components/Filters";
import ProductGallery from "../components/ProductGallery";
const HomePage = ({ products }) => {
  return (
    <>
      <Hero />
      <Filters />
      <ProductGallery products={products} />
    </>
  );
};

export default HomePage;
