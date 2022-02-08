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
        {products.map((product) => (
          <Col sm={10} md={6} lg={4}>
            <Product key={product.id} productData={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Store;