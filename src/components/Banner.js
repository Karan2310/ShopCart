import React from "react";

const Banner = () => {
  return (
    <div className="hidden sm:flex w-full  items-center justify-between bg-green-900 text-white p-3 px-6 font-light text-sm">
      <div className="flex items-center">
        <i className="fa-solid fa-phone me-2"></i>
        <p>+12 3456789098</p>
      </div>
      <div className="font-medium flex items-end">
        <p>Get 50% off on selected items</p>
        <div className="h-5 w-0.5 bg-white block mx-6"></div>
        <p>Shop Now</p>
      </div>
      <div className="flex items-center">
        <div className="flex items-center">
          <p>Eng</p>
          <svg
            className="w-2.5 h-2.5 ml-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </div>
        <div className="flex items-center ml-6">
          <p>Locarion</p>
          <svg
            className="w-2.5 h-2.5 ml-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Banner;
