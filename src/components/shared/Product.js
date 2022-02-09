import React from "react";
import { Card, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

//helper
import { shorten } from "../../helper/function";

const Product = ({ productData }) => {
  return (
    <Card className="my-3 shadow  ">
      <div className="d-flex justify-content-center my-3">
        <Image
          src={productData.image}
          alt="product"
          style={{ height: "250px", width: "250px" }}
          fluid
        />
      </div>

      <Card.Body>
        <Card.Title>{shorten(productData.title)}</Card.Title>
        <hr />
        <h4>{`${productData.price}$`}</h4>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-items-center">
        <Link to={`${productData.id}`}>details</Link>

        <Button>Add to cart</Button>
      </Card.Footer>
    </Card>
  );
};

export default Product;
