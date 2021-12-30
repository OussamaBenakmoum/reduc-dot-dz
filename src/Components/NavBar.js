import React from "react";
import {
  Nav,
  NavDropdown,
  Container,
  Navbar,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid style={{ display: "flex", margin: "auto" }}>
        {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>*/}
        <img src="./src/reduc.jpg" alt="LogoICI" href="#"></img>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-1"
            style={{
              display: "flex",
              maxHeight: "70px",
              margin: "auto",
              color: "red",
            }}
          >
            <Nav.Link href="#action1">catégories</Nav.Link>
            <Nav.Link href="#action2">Marques</Nav.Link>
            <NavDropdown title="Explorer" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Bons Plans</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Codes Promos</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Reductions</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Cadeaux</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Top membres</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <div style={{ display: "flex", margin: "auto" }}>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">create account</Button>
            </Form>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
