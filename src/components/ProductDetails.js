import React, { useContext } from "react";
import { useParams } from "react-router-dom";

//context
import { productContext } from "../context/ProductContextProvider";

const ProductDetails = () => {
  const { id } = useParams();
  const data = useContext(productContext);

  const product = data[id - 1];
  const { image, category, title, price, rating, description } = product;
  return (
    <div>
        <img src={image} alt="product" />
      <h3>{title}</h3>
      {category}
      {price}
      {rating}
      {description}
    </div>
  );
};

export default ProductDetails;
