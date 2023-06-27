import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css'; // Import the custom CSS file
import './Footer.css'; // Import the custom CSS file


function Footer() {
  return (
    <footer className='footer-bottom'>
        <Container>
          <p>&copy; {new Date().getFullYear()} Francis Boyle. All rights reserved.</p>
        </Container>
    </footer>
  )
};

export default Footer;
