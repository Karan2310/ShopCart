import React from "react";
import HeroImg from "../assets/hero.png";

const Hero = () => {
  return (
    <div
      className="flex flex-col md:flex-row px-8  md:px-20 pt-7 mx-10"
      style={{ backgroundColor: "#fbefe4" }}
    >
      <div className=" flex flex-col items-start justify-center text-green-900 text-3xl lg:text-5xl font-semibold ">
        <h1>Grab Upto 50% Off On Selected Headphone</h1>
        <button className="bg-green-900 rounded-full hover:bg-white hover:text-green-900 hover:ring-4 ring-green-900 p-3 md:p-4 text-white text-sm px-10 md:px-10 mt-8">
          Buy Now
        </button>
      </div>

      <img
        src={HeroImg}
        alt="hero"
        style={{ maxHeight: "300px" }}
        className="h-auto w-full object-contain mt-10 md:mt-0"
      />
    </div>
  );
};

export default Hero;
