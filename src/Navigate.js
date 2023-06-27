import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import './App.css'; // Import the custom CSS file

function Navigate() {
  return (
        <Navbar bg="dark" variant="dark" expand="md">
            <Container>
            <Navbar.Brand href="/">Francis Boyle</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-collapse" />
            <Navbar.Collapse id="navbar-collapse">
                <Nav className="ml-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/education">Education</Nav.Link>
                <Nav.Link href="/projects">Projects & Publications</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
  )
};

export default Navigate;
