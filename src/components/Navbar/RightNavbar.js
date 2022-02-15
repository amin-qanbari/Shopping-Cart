import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  z-index: 10;
  overflow: hidden;

  .cart {
    display: none;
  }

  a {
    text-decoration: none;
    /* width: 360px; */
    color: #fff;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    background-color: #0c1c24;
    opacity: 0.9;
    position: fixed;
    top: 0;
    right: 0;
    width: 50%;
    height: 100vh;
    padding-top: 4rem;
    transition: all 0.2s linear;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};

    .cart{
      display: block;
    }

    a{
    width: 360px;
    }

    a li {
      color: #f1f1f1;
    }
  }

  li {
    padding: 22px 35px;
    font-weight: bold;
    cursor: pointer;
    :hover {
      transition: all 0.2s ease-in-out;
      background-color: #fff;
      color: #010606;
    }
  }
`;

const RightNavbar = ({ open, close }) => {
  // const navigate = () => {

  // }
  return (
    <div>
      <Ul open={open}>
        <Link to="/products" onClick={close}>
          <li>محصولات</li>
        </Link>
        <Link className="cart" to="/cart" onClick={close}>
          <li>سبد خرید</li>
        </Link>
      </Ul>
    </div>
  );
};

export default RightNavbar;
