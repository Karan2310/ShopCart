import React, { useEffect } from "react";
import PhotoCard from "../components/ProductPageComponents/PhotoCard";
import ProductInfo from "../components/ProductPageComponents/ProductInfo";
import { useParams } from "react-router-dom";
import { useProductContext } from "../ProductsContext";
import { NavLink } from "react-router-dom";

const ProductPage = () => {
  const { products } = useProductContext();
  const { id } = useParams();
  const currentProductId = parseInt(id); // Parse the id string into an integer

  const currentProduct = products.find(
    (product) => product.id === currentProductId
  );

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <div className="pb-20">
      {currentProduct && (
        <>
          <div
            className="divider bg-gray-100 w-full"
            style={{ height: "2px" }}
          ></div>
          <div className="path mx-10 py-7 font-medium text-sm text-gray-400 ">
            <NavLink to="/">All</NavLink>
            <span className="mx-3">/</span>{" "}
            {currentProduct.category.charAt(0).toUpperCase() +
              currentProduct.category.slice(1)}
            <span className="mx-3">/</span> {currentProduct.title}
          </div>
          <div className="flex mx-10 flex-col md:flex-row">
            <div className="md:w-1/2">
              <PhotoCard currentProduct={currentProduct} />
            </div>
            <div className="info mt-10 md:mt-0 md:w-1/2">
              <ProductInfo currentProduct={currentProduct} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductPage;
