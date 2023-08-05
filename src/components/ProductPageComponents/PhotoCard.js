import React from "react";
import Photo from "../../assets/headphone.png";

const PhotoCard = ({ currentProduct }) => {
  const Images = [
    currentProduct.image,
    currentProduct.image,
    currentProduct.image,
    currentProduct.image,
  ];
  return (
    <div>
      <div class="grid gap-4 md:me-20">
        <div className="bg-gray-100 rounded-xl flex items-center justify-center aspect-square overflow-hidden relative p-16 md:p-28 ">
          <img
            src={currentProduct.image}
            alt=""
            srcset=""
            className="h-auto w-full"
            style={{ minWidth: "10rem", mixBlendMode: "multiply" }}
          />
        </div>
        <div class="grid grid-cols-4 gap-4">
          {Images.map((e) => {
            return (
              <div className="bg-gray-100 rounded-xl flex items-center justify-center aspect-square overflow-hidden p-4 lg:p-8">
                <img
                  src={e}
                  alt={currentProduct.title}
                  className="h-auto w-full "
                  style={{ mixBlendMode: "multiply" }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
