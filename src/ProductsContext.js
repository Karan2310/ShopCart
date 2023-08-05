import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
// Create a new context
const ProductContext = createContext();

// Create a custom provider component
export function ProductContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{ products, setProducts, loading, setLoading }}
    >
      {children}
    </ProductContext.Provider>
  );
}

// Custom hook to access the context
export function useProductContext() {
  return useContext(ProductContext);
}
