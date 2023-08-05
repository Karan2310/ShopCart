import React from "react";
import Photo from "../../assets/headphone.png";

const PhotoCard = () => {
  const Images = [Photo, Photo, Photo, Photo];
  return (
    <div>
      <div class="grid gap-4 md:me-20">
        <div className="bg-gray-100 rounded-xl flex items-center justify-center aspect-square overflow-hidden relative p-16 md:p-28 ">
          <img
            src={Photo}
            alt=""
            srcset=""
            className="h-auto w-full"
            style={{ minWidth: "10rem" }}
          />
        </div>
        <div class="grid grid-cols-4 gap-4">
          {Images.map((e) => {
            return (
              <div className="bg-gray-100 rounded-xl flex items-center justify-center aspect-square overflow-hidden p-4 lg:p-8">
                <img src={e} alt="" srcset="" className="h-auto w-full " />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
