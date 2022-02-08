import React, { createContext, useEffect, useState } from "react";

//api
import { getProducts } from "../services/api";

//Context
export const productContext = createContext();

const ProductContextProvider = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setProducts(await getProducts());
    };

    fetchApi();
  }, []);

  return (
    <productContext.Provider value={products}>
      {props.children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
