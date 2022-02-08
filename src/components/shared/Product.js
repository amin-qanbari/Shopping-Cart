import React from "react";
import { Card, Button, Image } from "react-bootstrap";

//helper
import { shorten } from "../../helper/function";

const Product = ({ productData }) => {
  return (
    <Card className="m1 shadow ">
        <div className="d-flex justify-content-center w-50 h-50">

      <Image src={productData.image} fluid />
        </div>
      <Card.Body>
        <Card.Title>{shorten(productData.title)}</Card.Title>
        <hr />
        <h4>{`${productData.price}$`}</h4>
        <div className="d-flex justify-content-between align-items-center">
          <Card.Link>details</Card.Link>
          <Button>
            Add to cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Product;
