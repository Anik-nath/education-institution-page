import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import Course from "../Course/Course";

const PopularCourse = () => {
  const [services, setServices] = useState([]);
  const popular = services.slice(6, 10);

  useEffect(() => {
    fetch("./services.JSON")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="mb-5">
      <div className="py-5 mb-2">
        <h2 className="border-bottom border-dark d-inline-block">Popular Courses</h2>
      </div>
      {services.length === 0 ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <Container>
          <Row xs={1} md={4} className="g-4">
            {popular.map((service) => (
              <Course key={service.id} service={service}></Course>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default PopularCourse;
