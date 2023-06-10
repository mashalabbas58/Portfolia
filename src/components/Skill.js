import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./Skill.css";

function Skill() {
  // Define an array of objects with card content
  const cardContent = [
    {
      title: 'UI/UX DESIGN',
      text: 'I have a strong proficiency in UI/UX design, creating visually appealing and user-centric digital experiences.',
      imageSrc: '/images/cardimg.jpg'
    },
    {
      title: 'PYTHON PROGRAMMING',
      text: 'I possess strong coding skills in Python programming, enabling me to develop efficient and robust solutions for various applications.',
      imageSrc: '/images/cardimg2.jpg'
    },
    {
      title: 'FRONTEND DESIGN',
      text: 'I am developing my skills in frontend design, striving to create visually appealing and user-friendly interfaces for web applications.',
      imageSrc: '/images/cardimg3.jpg'
    }
  ];

  return (
    <div className='skills'>
      <h2 style={{ marginBottom: '25px' , marginTop:"25px"}}>My Experties</h2>
      <Row xs={1} md={3} className="g-4">
        {cardContent.map((card, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src={card.imageSrc} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Skill;
