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
  height: 65px;
  width: 100%;
  z-index: 30;
  background-color:#1a73e8 ;
  padding: 10px 20px 0 20px;
  position: sticky;
  top: 0;
  margin-bottom: 20px;
`;

const Navbar = () => {
  const { state } = useContext(cartContext);

  return (
    <Nav>
      <Burger />
      <Link to="/cart" style={{ textDecoration: "none" }}>
        <i className="fa fa-shopping-cart" style={{color:"#f2f2f2"}}></i>
        <span className="badge bg-danger rounded-pill">
          {state.itemsCounter}
        </span>
      </Link>
      <SearchInput/>
    </Nav>
  );
};

export default Navbar;
