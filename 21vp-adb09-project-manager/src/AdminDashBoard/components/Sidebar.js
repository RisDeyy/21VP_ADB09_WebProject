import React from 'react';
import { Navbar, Nav, Row } from 'react-bootstrap';
import '../css/Sidebar.css'

const Sidebar = () => {
  return (
    <>
      <Row>
        <Navbar className="flex-column sidebar">
          <Nav className="flex-column menu-list">
            <Nav.Link className='mb-2 fw-bold' href="/account-management">Quản lý tài khoản</Nav.Link>
            <Nav.Link className='mb-2 fw-bold' href="/revenue-statistics">Thống kê doanh thu</Nav.Link>
          </Nav>
        </Navbar>
      </Row>
    </>
  );
};

export default Sidebar;
