import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

const HeaderRevenueStatistics = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="fw-bold me-auto">
                    <NavLink to="/admin/revenue-statistics/by-revenue" className="nav-link text-custom-color" activeClassName="active">Doanh thu</NavLink>
                    <NavLink to="/admin/revenue-statistics/by-number-of-customers" className="nav-link text-custom-color" activeClassName="active">Khách hàng</NavLink>
                    <NavLink to="/admin/revenue-statistics/by-number-of-appointments" className="nav-link text-custom-color" activeClassName="active">Lượt khám</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default HeaderRevenueStatistics;