import React from 'react'
import {Nav, NavDropdown,Container, Navbar, Form, FormControl, Button} from 'react-bootstrap'

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
  <Container fluid>
    {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>*/}
    <img src="logo.svg" alt="imageici" href="#"></img> 
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">catégories</Nav.Link>
        <Nav.Link href="#action2">Marques</Nav.Link>
        <Nav.Link href="#" >Explorer</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">create account</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default NavBar
