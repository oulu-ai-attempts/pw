import React from 'react';
import { Container, Card } from 'react-bootstrap';
import Navigate from './Navigate';
import Footer from './Footer';
import './Education.css'; // Import the custom CSS file

const Education = () => {
  return (
    <div className="education-page">
      <Container>
        <h2 className="section-title">Education</h2>
        <div className="university-info">
          <div className="university-details">
            <h3 className="university-name">Baylor University</h3>
            <p className="university-city">Waco, TX</p>
            <p className="majors">Bachelor of Science in Computer Science</p>
            <p className="majors">Bachelor of Arts in Mathematics</p>
            <p className="years">January 2020 - December 2023</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Education;
