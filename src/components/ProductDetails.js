import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductDetails.module.css";
import { Link } from "react-router-dom";

//placeholder
// import ProductDetailPlaceHolder from "./LoaderPlaceholder/ProductDetailPlaceHolder";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const { image, title, description, price, category } = product;

  // const [loaded, setLoaded] = useState(false);

  // const loaderHandler = () => {
  //   setTimeout(() => {
  //     setLoaded(true);
  //   }, 2000);
  // };

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setProduct(response.data));
  }, [id]);

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {/* {!loaded && <ProductDetailPlaceHolder extraStyles={{ height: "100%" }} />} */}
        <img className={styles.image} src={image} alt="product"  />
      </div>
      <div className={styles.textContainer}>
        <h3>{title}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.category}>
          
          {category} <span>: دسته بندی</span>
        </p>
        <div className={styles.buttonContainer}>
          <span className={styles.price}>{price} تومان</span>
          <Link to="/products">بازگشت به فروشگاه</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
