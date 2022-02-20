import React, { useContext } from "react";
import SearchInput from "./SearchInput";

//css
import styled from "styled-components";

//context
import { cartContext } from "../../context/CartContextProvider";

//burger
import Burger from "./Burger";

//SPA
import { Link } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #192f38;
  height: 60px;
  width: 100%;
  z-index: 30;
  background: rgb(34, 80, 105);
  background: linear-gradient(
    0deg,
    rgba(34, 80, 105, 1) 0%,
    rgba(110, 142, 177, 1) 100%
  );
  padding: 10px 0px 0 20px;
  position: sticky;
  top: 0;
  margin-bottom: 20px;

  .cart2 i {
    margin-right: 15px;
    line-height: 35px;
    font-size: 23px;
    position: relative;
    margin-right: 55px;
    display: none;
  }

  .cart2 span {
    position: absolute;
    right: -10px;
    font-size: 10px;
  }

  .div {
    display: flex;
    justify-content: flex-end;
    width: 60%;
  }

  .div a i {
    margin-right: 15px;
    line-height: 35px;
    font-size: 23px;
    position: relative;
  }

  .div a span {
    position: absolute;
    right: -10px;
    font-size: 10px;
  }

  .user {
    color: #fff;
  }

  @media (max-width: 768px) {
    padding: 10px 10px 0 10px;

    line-height: 10px;
    .div a {
      display: none;
    }
    .cart2 i {
      display: block;
    }
  }
`;

const Navbar = () => {
  const { state } = useContext(cartContext);

  return (
    <Nav>
      <div className="d-flex align-items-center justify-content-between">
        <Burger />
        <Link className="cart2" to="/cart" style={{ textDecoration: "none" }}>
          <i className="fa fa-shopping-cart" style={{ color: "#f2f2f2" }}>
            <span className="badge bg-danger rounded-pill">
              {state.itemsCounter}
            </span>
          </i>
        </Link>
      </div>
      <div className="div">
        <SearchInput className="SearchInput" />

        <Link to="/signup">
          <i className="fa fa-user user"></i>
        </Link>

        <Link to="/cart" style={{ textDecoration: "none" }}>
          <i className="fa fa-shopping-cart" style={{ color: "#f2f2f2" }}>
            <span className="badge bg-danger rounded-pill">
              {state.itemsCounter}
            </span>
          </i>
        </Link>
      </div>
    </Nav>
  );
};

export default Navbar;
