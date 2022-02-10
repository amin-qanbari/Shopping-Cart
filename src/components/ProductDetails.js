import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ProductDetails = () => {
  const { id } = useParams();
  const [product , setProduct] = useState([])
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then(response => setProduct(response.data))
  }, [id])

  return (
    <div>
      <img src={product.image} alt="product" />
      <p>{product.price}</p>
      <p><span>Category:</span>{product.category}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;
