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
  background-color: #1a73e8;
  padding: 10px 20px 0 20px;
  position: sticky;
  top: 0;
  margin-bottom: 20px;

  @media (max-width: 768px) {
   .div a  {
      display: none;
    }
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
    /* left: 27px; */
    right: -10px;
    font-size: 10px;
  }

`;

const Navbar = () => {
  const { state } = useContext(cartContext);

  return (
    <Nav>
      <Burger />

      <div className="div">
        <SearchInput />

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
