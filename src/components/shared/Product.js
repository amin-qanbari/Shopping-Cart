import React, { useContext } from "react";
import { Card, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

//css
import styles from "./Product.module.css"

//helper
import { shorten, isInCart, quantityCount } from "../../helper/function";

//context
import { cartContext } from "../../context/CartContextProvider";

const Product = ({ productData }) => {
  const { state, dispatch } = useContext(cartContext);
  return (
    <Card className="my-3 shadow">
      <div className="d-flex justify-content-center my-3">
        <Image
          src={productData.image}
          alt="product"
          style={{ height: "250px", width: "250px" }}
          fluid
        />
      </div>

      <Card.Body>
        <Card.Title>{shorten(productData.title)}</Card.Title>
        <hr />
        <h4>{`${productData.price}$`}</h4>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-items-center">
        <Link to={`${productData.id}`}>details</Link>

        <div>
          {isInCart(state, productData.id) ? (
            <Button
            className={styles.btn}
              onClick={() =>
                dispatch({ type: "INCREASE", payload: productData })
              }
            >
              +
            </Button>
          ) : (
            <Button
              onClick={() =>
                dispatch({ type: "ADD_ITEM", payload: productData })
              }
            >
              Add To Cart
            </Button>
          )}

          {quantityCount(state, productData.id) > 1 && (
            <Button
            className={styles.btn}
              onClick={() =>
                dispatch({ type: "DECREASE", payload: productData })
              }
            >
              -
            </Button>
          )}
          {quantityCount(state, productData.id) === 1 && (
            <Button
            className={styles.btn}
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: productData })
              }
            >
              remove
            </Button>
          )}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default Product;
