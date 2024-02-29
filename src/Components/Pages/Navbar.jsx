import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';    

    function NavHeader() {
        
        return (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="/">Product DashBoard</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '300px' }}
                navbarScroll
              >
                <Nav.Link as={Link} to="/">Home  </Nav.Link>
                <Nav.Link as={Link} to="/product">Product</Nav.Link>
                <Nav.Link as={Link} to="/addProduct">Add Product</Nav.Link>
                <Nav.Link as={Link} to="/updateProduct">Update</Nav.Link>
                <Nav.Link as={Link} to="/delete">Delete</Nav.Link>

              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>

                <Button as={Link} className='m-2'  to='/signUp'>SignUp</Button>
                <Button as={Link} className='m-2'  to='/register'>Register</Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  )
}

export default NavHeader