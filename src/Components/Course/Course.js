import React from "react";
import './Course.css';
import { Button, Card, Col, Row } from "react-bootstrap";

const Course = (props) => {
    const {name,img,lessons,price,catagory} = props.service;

  return (
    <Col>
      <Card className="shadow" style={{ height: '100%' }}>
        <div className="image-container">
            <Card.Img className="img" variant="top" src={img} />
        </div>
        <Card.Body>
          <small className="border-bottom">{catagory}</small>
          <Card.Title>
            <h5 className="py-3">{name}</h5>
          </Card.Title>
          <Button variant="outline-primary mb-3">Take Course</Button>
        </Card.Body>
        <Card.Footer>
        <Row className="h6">
          <Col>{lessons} Lessons</Col>
          <Col>$ {price}</Col>
      </Row>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Course;
