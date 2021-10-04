import React from 'react';
import { Button, Col, Container, Row } from "react-bootstrap";

const About = () => {
    return (
    <div style={{height : "100vh"}}>
      <Container className="py-5">
      <h2 className="border-bottom border-dark d-inline-block mb-5">About Us</h2>
        <Row>
          <Col style={{textAlign : "justify"}}>
            <div className="mt-5">
                <h2>I will stay with you until you pass your exam.</h2>
                <h6 className="text-primary py-3">Who else do you know who'll do that for you?</h6>
                <p className="lead">So I said codswallop car boot cheers mufty I don't want no agro are you taking the piss cheeky my lady gutted mate excuse my french, gormless have it cras.</p>
                <Button variant="primary" type="submit">
                 See More
                </Button>
            </div>
          </Col>
          <Col>
            <img src="https://image.freepik.com/free-vector/tiny-hr-specialist-looking-recruits-job-flat-illustration_74855-15541.jpg" alt="" />
          </Col>
        </Row>
      </Container>
    </div>
    );
};

export default About;