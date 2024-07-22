import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

const HeaderAccountManagement = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="fw-bold me-auto">
                    <NavLink to="/admin/account-management/admin-account" className="nav-link text-custom-color" activeClassName="active">Quản trị viên</NavLink>
                    <NavLink to="/admin/account-management/employee-account" className="nav-link text-custom-color" activeClassName="active">Nhân viên</NavLink>
                    <NavLink to="/admin/account-management/dentist-account" className="nav-link text-custom-color" activeClassName="active">Nha sĩ</NavLink>
                    <NavLink to="/admin/account-management/customer-account" className="nav-link text-custom-color" activeClassName="active">Khách hàng</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default HeaderAccountManagement;