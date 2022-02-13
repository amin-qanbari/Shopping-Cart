import React, { useContext, useState } from "react";

//css
// import styles from "./SearchInput.module.css";

//context
import { setSearchContext } from "../../context/SearchContextProvider";
import styled from "styled-components";

const DIV = styled.div`
  position: relative;
  width: ${({ toggle }) => (toggle ? "240px" : "30px")};
  height: 30px;
  background: #fff;
  border-radius: 60px;
  transition: 0.5s;
  box-shadow: 0 0 5px #2573ef;
  overflow: hidden;
  margin-bottom: 9px;
  .input {
    position: relative;
    right: 25px;
    display: flex;
    justify-content: center;
    width: 300px;
    height: 30px;
  }

  .input input {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 15px;
    padding: 10px 0;
  }

  .icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 30px;
    background: #fff;
    border-radius: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    cursor: pointer;
  }
  .icon::before {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    border: 3px solid #287dfc;
    border-radius: 50%;
    transform: translate(-2px, -2px);
  }

  .icon::after {
    content: "";
    position: absolute;
    width: 3px;
    height: 10px;
    background: #287dfc;
    transform: translate(5px, 6px) rotate(315deg);
  }


`;

const SearchInput = () => {
  const  setSearchTerm = useContext(setSearchContext);
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(!toggle);
  };
 
  return (
    <DIV className="search" toggle={toggle}>
      <div className="icon" onClick={toggleHandler}></div>
      <div className="input">
        <input
          type="text"
          className="searchText"
          placeholder="جستجو..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </DIV>
  );
};

export default SearchInput;
