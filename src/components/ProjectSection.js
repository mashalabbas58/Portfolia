import React from "react";
import { Container, Row, Col, Image, Button, Modal } from "react-bootstrap";
import { useState } from "react";
import "./ProjectSection.css";
import { Link } from 'react-router-dom';


function ProjectSection() {
  const projects = [
    {
      id: 1,
      image: "/images/salon/1.png",
      title: "Beauty Salon",
    },
    {
      id: 2,
      image: "/images/signin.png",
      title: "SignIn",
    },
    {
      id: 3,
      image: "/images/cafe.png",
      title: "Cafe",
    },
  ];
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section className="projects-section">
      <Container>
        <h2 className="text-center mb-4">My Projects</h2>
        <Row>
          {projects.map((project) => (
            <Col md={4} key={project.id}>
              <div
                className="project-item"
                onClick={() => handleImageClick(project.image)}
              >
                <div className="image-container">
                  <Image src={project.image} alt={project.title} fluid />
                  <div className="overlay">
                    <h3>{project.title}</h3>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-4">
          <Link to="/project">
            <Button variant="outline-dark" size="lg">
              View Projects
            </Button>
          </Link>
        </div>
      </Container>

      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Project Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={selectedImage} alt="Project Image" fluid />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

export default ProjectSection;
