import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import Course from "../Course/Course";

const Services = () => {
  const [services, setServices] = useState([]);
  console.log(services.slice(0,4));

  useEffect(() => {
    fetch("./services.JSON")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="py-5 mb-2">
        <h2 className="border-bottom border-dark d-inline-block">Our Courses</h2>
      </div>
      {
        services.length === 0 ? 
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        : 
       <Container>
            <Row xs={1} md={3} className="g-5 mb-5">
            {services.map((service) => (
            <Course key={service.id} service={service}></Course>
            ))}
            </Row>
       </Container>
      }
      
    </div>
  );
};

export default Services;
