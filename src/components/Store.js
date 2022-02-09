import React, { useContext } from "react";
import Product from "./shared/Product";

//context
import { productContext } from "../context/ProductContextProvider";
//bootstrap
import { Row, Col, Container } from "react-bootstrap";

const Store = () => {
  const products = useContext(productContext);
  return (
    <Container>
      <Row>
        {products.map((item) => (
          <Col sm={12} md={6} lg={4} key={item.id}>
            <Product  productData={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Store;
