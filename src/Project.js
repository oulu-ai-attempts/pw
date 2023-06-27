import React from 'react';
import { Container } from 'react-bootstrap';
import './Project.css';
import Navigate from './Navigate';
import Footer from './Footer';


const Project = () => {
  return (
    <div className="projects-page">
      <Navigate />
      <div className="project-jumbotron text-center">
        <Container>
          <h1 className="display-4">Projects and Publications</h1>
          <p className="lead">Baylor University</p>
        </Container>
      </div>
      <Container>
        <div className="project">
          <h3 className="project-name">UNIVERSITY OF OULU M3S CLOUD GROUP</h3>
          <p className="position">IRES Research Intern</p>
          <p className="dates">June 2023 - July 2023</p>
          <p className="description">
            Project description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh
            elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue
            semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
        </div>
        <div className="project">
          <h3 className="project-name">BAYLOR UNIVERSITY CYBERSECURITY</h3>
          <p className="position">Cybersecurity Research Assistant</p>
          <p className="dates">January 2023 - May 2023</p>
          <p className="description">
            Project description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh
            elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue
            semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Project;
