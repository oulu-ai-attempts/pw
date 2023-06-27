import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import './App.css'; // Import the custom CSS file
import Navigate from './Navigate';
import Footer from './Footer';

function Home() {
  return (
    <div>
      <Navigate />

      <div className="jumbotron text-center">
        <Container>
          <h1 className="display-4">Welcome to Francis Boyle's Personal Webpage!</h1>
          <p className="lead">Computer Science Major at Baylor University!</p>
        </Container>
      </div>

      <Container className="my-5">
          <Row>
            <Col md={6}>
              <div className="image-containers">
                <img src="/FBImage.jpg" alt="Bishop Fernandes" />
              </div>
            </Col>
            <Col md={6}>
              <div className="description-container">
                <h2>FRANCIS BOYLE</h2>
                <p>
                This is the personal webpage of Francis Boyle. He is an engaged and passionate Computer Science candidate with a strong analytical mind and 
                an ability to solve complex problems. Analytical thinker with a proven track record for surpassing performance objectives, 
                leading by example, and building cohesiveness and unity among team members. Proven leader with project background in web 
                applications and server programs. Strong foundation in math and logic with a track record of consistently meeting project
                deadlines under challenging and fast-paced enviroments.
                </p>
                <Button variant="primary">Learn More</Button>
              </div>
            </Col>
          </Row>
        </Container>
        <Footer />
    </div>
  );
}

export default Home;
