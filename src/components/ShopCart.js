import React, { useContext } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

//css
import "./Shopcart.css"

//svg
import empty from "../images/empty-cart.svg"

import Cart from "./Cart";
//context
import { cartContext } from "../context/CartContextProvider";

const ShopCart = () => {
  const { state, dispatch } = useContext(cartContext);

  return (
    <Container>
    <div >
      <div className="m-2">
        {state.selectedItems.map((item) => (
          <Cart key={item.id} data={item} />
        ))}
      </div>
      {state.itemsCounter > 0 && (
        <div>
          <p>
            <span>Total Items:</span>
            {state.itemsCounter}
          </p>
          <p>
            <span>Total Payments:</span>
            {state.total}
          </p>
          <div>
            <Button onClick={() => dispatch({ type: "CHECKOUT" })}>
              Checkout
            </Button>
            <Button onClick={() => dispatch({ type: "CLEAR" })}>Clear</Button>
          </div>
        </div>
      )}

      {state.checkout && (
        <div>
          <h3>Checkout Successfully</h3>
          <Link to="/products">Buy More</Link>
        </div>
      )}

      {!state.checkout && state.itemsCounter === 0 && (
        <div className=" clear d-flex align-items-center flex-column justify-content-center px-3" style={{minHeight:"70vh"}}>
          
          <img src={empty} style={{width:"21vw"}} alt="empty-card" />
          <h5 className="my-4 fs-4">سبد خرید شما خالی است!</h5>
          <p className="text-muted">می‌توانید برای مشاهده محصولات به صفحه زیر بروید:</p>
          <Link to="/products">برگشت به صفحه محصولات</Link>
        </div>
      )}
    </div>
    </Container>
  );
};

export default ShopCart;
