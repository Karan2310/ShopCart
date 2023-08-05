import React from "react";
import PhotoCard from "../components/ProductPageComponents/PhotoCard";
import ProductInfo from "../components/ProductPageComponents/ProductInfo";
const ProductPage = () => {
  return (
    <div className="pb-20">
      <div
        className="divider bg-gray-100 w-full"
        style={{ height: "2px" }}
      ></div>
      <div className="path mx-10 py-7 font-medium text-sm text-gray-400 ">
        All <span className="mx-3">/</span> Products{" "}
        <span className="mx-3">/</span> In Stock <span className="mx-3">/</span>
        JBL Headphones
      </div>
      <div className="flex mx-10 flex-col md:flex-row">
        <div className="md:w-1/2">
          <PhotoCard />
        </div>
        <div className="info mt-10 md:mt-0 md:w-1/2">
          <ProductInfo />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
