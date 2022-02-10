import React, { useContext } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

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
        <div className="d-flex align-items-center flex-column justify-content-center" style={{minHeight:"70vh"}}>
          
          <img src={empty} alt="empty-card" />
          <h4>سبد خرید شما خالی است</h4>
          <Link to="/products">Go Back Home</Link>
        </div>
      )}
    </div>
    </Container>
  );
};

export default ShopCart;
