import React, { useContext } from "react";

//css
import styles from "./Cart.module.css"

//helper
import { shorten } from "../helper/function";

//context
import { cartContext } from "../context/CartContextProvider";

const Cart = ({ data }) => {
  const { dispatch } = useContext(cartContext);
  const { image, price, title, quantity } = data;
  return (
    <div className={styles.container}>
      <img src={image} alt="product" className={styles.productImage}/>
      <div className={styles.data}>
        <p className="mx-3">{shorten(title)}</p>
        <h6>{price} تومان</h6>
      </div>

      <div className={styles.divQuantity}>
        <span className={styles.quantity}>{quantity}</span>
      </div>

      <div className={styles.buttonContainer}>
        <button onClick={() => dispatch({ type: "INCREASE", payload: data })}>
          +
        </button>
        {quantity > 1 ? (
          <button className={styles.decrease} onClick={() => dispatch({ type: "DECREASE", payload: data })}>
            -
          </button>
        ) : (
          <button
            onClick={() => dispatch({ type: "REMOVE_ITEM", payload: data })}
          >
            <i className="fa fa-trash-can"></i>
          </button>
          
          
        )}
        
      </div>
    </div>
  );
};

export default Cart;
