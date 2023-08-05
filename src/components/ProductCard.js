import React from "react";
import { NavLink } from "react-router-dom";
import StarRating from "./StarRating";

const ProductCard = ({
  title,
  id,
  price,
  description,
  image,
  category,
  rating,
}) => {
  return (
    <NavLink to={`/product/${id}`}>
      <div className="card hover:scale-105 cursor-pointer transition-all">
        <div
          className="bg-gray-100 rounded-xl flex items-center justify-center aspect-square overflow-hidden relative"
          style={{ maxWidth: "25rem", minWidth: "15rem" }}
        >
          <img
            src={image}
            alt={title}
            className="h-auto w-full "
            style={{ maxWidth: "12rem", mixBlendMode: "multiply" }}
          />
          <div className="like-div absolute top-4 right-4 bg-white p-3 rounded-full h-10 w-10 flex items-center justify-center cursor-pointer">
            <i className="fa-regular fa-heart text-lg"></i>
          </div>
        </div>
        <div className="info py-5 flex ">
          <div>
            <h1
              className="font-semibold"
              style={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontSize: "12px",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
              className="text-gray-700 my-2 font-medium"
            >
              {description}
            </p>

            <div className="rating flex items-center ">
              <div className="flex items-center space-x-1">
                <p className="font-medium text-sm">{rating.rate}</p>
                <StarRating rating={rating.rate} />
              </div>
              <p
                style={{ fontSize: "12px" }}
                className="text-gray-700 ms-2 font-medium"
              >
                ({rating.count})
              </p>
            </div>

            <button className="px-4 p-2 border-2 border-gray-600 font-semibold text-xs rounded-full mt-3 hover:bg-green-800 hover:text-white hover:border-gray-800">
              Add to cart
            </button>
          </div>
          <div>
            <div className="flex font-semibold items-start ms-5">
              <p className="text-xs">$</p>
              <p className="text-lg -mt-1">
                {price ? price.toString().split(".")[0] : null}
              </p>
              <p className="text-xs">
                .{price ? price.toString().split(".")[1] || "00" : "00"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default ProductCard;
