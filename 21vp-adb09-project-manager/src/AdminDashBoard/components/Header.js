import React from 'react';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import '../css/Header.css';

const Header = () => {
  return (
    <Navbar className='header' expand="lg">
      <Container fluid>
        <Navbar.Brand href="/admin" className='logo fw-bold'>
          <img
            src="/logo192.png"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          /> DR.CHANGCANNANG
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> {/* Sử dụng ms-auto để đẩy các mục sang phải */}
            <Nav.Link href="#notifications" className='me-4 noti'>
              <i className="bi bi-bell-fill"></i>
            </Nav.Link>
            <Nav.Link href="#profile">
              <Image src="/img/profile.jpg" roundedCircle height="40" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
