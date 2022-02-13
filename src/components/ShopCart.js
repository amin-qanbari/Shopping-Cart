import React, { useContext } from "react";
import { Link } from "react-router-dom";

//css
import styles from "./Shopcart.module.css";

//svg
import empty from "../images/empty-cart.svg";

import Cart from "./Cart";
//context
import { cartContext } from "../context/CartContextProvider";

const ShopCart = () => {
  const { state, dispatch } = useContext(cartContext);

  return (
    <div className={styles.container}>
      <div className={styles.cartContainer}>
        {state.selectedItems.map((item) => (
          <Cart key={item.id} data={item} />
        ))}
      </div>
      {state.itemsCounter > 0 && (
        <div className={styles.payments}>
          <p>
            <span>تعداد: </span>
            {state.itemsCounter}
          </p>
          <p>
            <span>مبلغ پرداختی: </span>
            {state.total} تومان
          </p>
          <div className={styles.buttonContainer}>
            <button
              className={styles.checkoutBtn}
              onClick={() => dispatch({ type: "CHECKOUT" })}
            >
              تسویه 
            </button>
            <button
              className={styles.clearBtn}
              onClick={() => dispatch({ type: "CLEAR" })}
            >
              پاک کردن 
            </button>
          </div>
        </div>
      )}

      {state.checkout && (
        <div className={styles.checkout}>
          <h3>  خرید شما با موفقیت انجام شد </h3>
          <Link to="/products">بازگشت به صفحه محصولات</Link>
        </div>
      )}

      {!state.checkout && state.itemsCounter === 0 && (
        <div className={styles.clear}>
          <img src={empty} style={{ width: "21vw" }} alt="empty-card" />
          <h5>سبد خرید شما خالی است!</h5>
          <p>می‌توانید برای مشاهده محصولات به صفحه زیر بروید:</p>
          <Link to="/products">برگشت به صفحه محصولات</Link>
        </div>
      )}
    </div>
  );
};

export default ShopCart;
