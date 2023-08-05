import React from "react";
import ProductCard from "./ProductCard";
const ProductGallery = () => {
  return (
    <div className="px-10 pb-10">
      <h1 className="text-2xl font-semibold mb-6">Headphones For You!</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductGallery;
