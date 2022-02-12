import React, { useContext } from "react";
import Product from "./shared/Product";

//context
import { productContext } from "../context/ProductContextProvider";
import { searchContext } from "../context/SearchContextProvider";
//bootstrap
import { Row, Col, Container } from "react-bootstrap";

const Store = () => {
  const products = useContext(productContext);
  const searchTerm = useContext(searchContext)
  return (
    <Container>
      <Row>
        {products
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            } else{
              return false
            }
          })
          .map((item) => (
            <Col sm={12} md={6} lg={4} key={item.id}>
              <Product productData={item} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Store;
