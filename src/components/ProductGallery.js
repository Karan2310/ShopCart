import React from "react";
import ProductCard from "./ProductCard";
import { useProductContext } from "../ProductsContext";

const ProductGallery = () => {
  const { products } = useProductContext();

  return (
    <div className="px-10 pb-10">
      <h1 className="text-2xl font-semibold mb-6">Headphones For You!</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {products &&
          products.map((product, index) => {
            return (
              <div key={index}>
                <ProductCard {...product} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductGallery;
