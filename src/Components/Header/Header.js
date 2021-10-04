import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <div>
      <Navbar className="shadow" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="brand text-uppercase" to="/home">DEV-School</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <NavLink className="nav-link" to="/home"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#fff"
                }}
              >Home</NavLink>
              <NavLink className="nav-link" to="/about"
                activeStyle={{
                    fontWeight: "bold",
                    color: "#fff"
                  }}
              >About</NavLink>
              <NavLink className="nav-link" to="/courses"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#fff"
                }}
              >Courses</NavLink>
              <NavLink className="nav-link" to="/instructors"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#fff"
                }}
              >Instructors</NavLink>
              <NavLink className="nav-link" to="/contact"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#fff"
                }}
              >Contact</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
