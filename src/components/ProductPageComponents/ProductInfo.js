import React, { useState } from "react";
import StarRating from "../StarRating";

const ProductInfo = ({ currentProduct }) => {
  const colors = ["red", "blue", "green", "gray"];
  const [productCount, setProductCount] = useState(1);
  return (
    <div>
      <div className="md:w-3/4">
        <h1 className="text-3xl font-semibold">{currentProduct.title}</h1>
        <p
          style={{ fontSize: "12px" }}
          className="text-gray-500 my-3 font-medium "
        >
          {currentProduct.description}
        </p>
        <div className="rating flex items-center ">
          <div className="flex items-center space-x-1">
            <StarRating rating={currentProduct.rating.rate} />
          </div>
          <p
            style={{ fontSize: "12px" }}
            className="text-gray-700 ms-2 font-medium"
          >
            ({currentProduct.rating.count})
          </p>
        </div>

        <div
          className="divider bg-gray-100 w-full my-8"
          style={{ height: "2px" }}
        ></div>
        {/* Price Tab */}
        <div className="price">
          <p className="font-medium text-2xl">
            ${currentProduct.price} or {(currentProduct.price / 6).toFixed(2)}
            /month
          </p>
          <p
            style={{ fontSize: "12px" }}
            className="desc text-gray-500 my-1 font-medium "
          >
            Suggested Payments with 6 months special financing
          </p>
        </div>

        <div
          className="divider bg-gray-100 w-full my-8"
          style={{ height: "2px" }}
        ></div>
        {/* Color Select */}
        <div className="color">
          <h1 className="text-lg font-medium">Choose Color</h1>
          <div className="options my-4 flex">
            {colors.map((e, index) => {
              return (
                <div
                  className="colorbox  h-10 w-10 rounded-full border-2 cursor-pointer border-black flex items-center justify-center me-3 "
                  key={index}
                >
                  <div className={`bg-${e}-300 h-8 w-8 rounded-full`}></div>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className="divider bg-gray-100 w-full my-10"
          style={{ height: "2px" }}
        ></div>

        {/* Add to cart */}
        <div>
          <div className="flex items-center ">
            <div className="bg-gray-100 flex items-center p-1 px-6 rounded-full font-semibold text-lg">
              <button
                className="p-2"
                onClick={() => {
                  if (productCount > 1) {
                    setProductCount(productCount - 1);
                  }
                }}
              >
                -
              </button>
              <p className="mx-5">{productCount}</p>
              <button
                className="p-2"
                onClick={() => {
                  setProductCount(productCount + 1);
                }}
              >
                +
              </button>
            </div>
            <div className="flex flex-col  ms-5 md:ms-10 text-xs md:text-sm font-normal">
              <p>
                Only{" "}
                <span style={{ color: "#ff8c38" }} className=" font-medium">
                  12 Items
                </span>{" "}
                left!
              </p>
              <p>Dont miss it</p>
            </div>
          </div>
          <div className="flex my-8 font-semibold flex-col md:flex-row">
            <button className="bg-green-900 rounded-full  hover:bg-green-950 p-3 text-white text-sm px-10 w-full me-5">
              Buy Now
            </button>
            <button className="bg-white rounded-full text-green-900 hover:text-white hover:bg-green-900 ring-2 ring-green-900 p-3 text-sm px-10 w-full mt-5 md:mt-0">
              Add to Cart
            </button>
          </div>
        </div>

        <div
          className="divider bg-gray-100 w-full my-10 mt-15"
          style={{ height: "2px" }}
        ></div>

        {/* Delivery Instructions */}
        <div className="inst border-2 border-gray-200  rounded-lg">
          <div className="flex p-5">
            <i
              className="fa-solid fa-truck me-3"
              style={{ color: "#ff8c38" }}
            ></i>
            <div>
              <p className="font-medium -mt-1">Free Delivery</p>
              <p style={{ fontSize: "12px", textDecoration: "underline" }}>
                Enter your postal code for Delivery Availability
              </p>
            </div>
          </div>

          <div
            className="divider bg-gray-200 w-full "
            style={{ height: "3px" }}
          ></div>
          <div className="flex p-5">
            <i
              className="fa-solid fa-box me-5"
              style={{ color: "#ff8c38" }}
            ></i>
            <div>
              <p className="font-medium -mt-1">Return Delivery</p>
              <p style={{ fontSize: "12px" }}>
                Free 30days Delivery Returns.{" "}
                <span style={{ textDecoration: "underline" }}>Details</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
