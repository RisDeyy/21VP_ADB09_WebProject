import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../css/Header.css'; // Import CSS file

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="web-name fw-bold">DR.CHANGCANNANG</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="fw-bold me-auto">
            <NavLink to="/" className="nav-link text-custom-color" activeClassName="active">Trang chủ</NavLink>
            <NavLink to="/booking" className="nav-link text-custom-color" activeClassName="active">Đặt lịch</NavLink>
            <NavLink to="/blog" className="nav-link text-custom-color" activeClassName="active">Blogs sức khỏe</NavLink>
            <NavLink to="/about" className="nav-link text-custom-color" activeClassName="active">Liên hệ</NavLink>
          </Nav>
          <Nav>
            <NavLink to="#login" className="nav-link">Hello Account</NavLink>
            <NavLink to="#logout" className="nav-link">Log out</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
