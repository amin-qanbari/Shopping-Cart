import React, { useContext } from "react";

import { Link } from "react-router-dom";

//context
import { cartContext } from "../context/CartContextProvider";

const Header = () => {
  const { state } = useContext(cartContext);
  return (
    <Navbar bg="light" expand="lg" className="px-5">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      
          <Link to="/cart" style={{textDecoration:"none"}}>
            <i className="fa fa-shopping-cart"></i>
            <span className="badge bg-danger rounded-pill">{state.itemsCounter}</span>
          </Link>
       
      </Container>
    </Navbar>
  );
};

export default Header;
