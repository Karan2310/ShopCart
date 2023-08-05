import React from "react";

const Filters = () => {
  const filters = [
    "Headphone Type",
    "Price",
    "Review",
    "Color",
    "Material",
    "Offer",
  ];
  return (
    <div className="filter-div p-10 flex items-center justify-between">
      <div className="flex overflow-x-auto items-center">
        {filters.map((e, index) => {
          return (
            <div
              className="bg-gray-200 text-black py-2 px-5 rounded-full text-sm w-fit flex items-center cursor-pointer me-3 font-medium my-3 xl:my-0 hover:bg-gray-300"
              key={index}
            >
              <p style={{ textWrap: "nowrap" }}>{e}</p>
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
          );
        })}
        <div className="bg-gray-200 text-black py-2 px-5 rounded-full text-sm w-fit flex items-center cursor-pointer me-3 font-medium">
          <p style={{ textWrap: "nowrap" }}>All Filter</p>
          <i className="fa-solid fa-sliders ms-3"></i>
        </div>
      </div>
      <div className="border-2 border-gray-200 text-black py-2 px-5 rounded-full text-sm w-fit items-center cursor-pointer me-3 font-medium flex ms-3">
        <p style={{ textWrap: "nowrap" }}>Sort by</p>
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
  );
};

export default Filters;
