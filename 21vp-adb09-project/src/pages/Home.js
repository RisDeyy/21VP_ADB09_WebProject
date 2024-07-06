import React from 'react';
import { Container, Row, Col, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">DR.CHANGCANNANG</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Trang chủ</Nav.Link>
              <Nav.Link href="#booking">Đặt lịch</Nav.Link>
              <Nav.Link href="#blog">Blogs sức khỏe</Nav.Link>
              <Nav.Link href="#contact">Liên hệ</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#login">Hello Account</Nav.Link>
              <Nav.Link href="#logout">Log out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Form className="d-flex mb-4">
          <FormControl type="search" placeholder="Tìm kiếm dịch vụ..." className="me-2" aria-label="Search" />
          <Button variant="outline-success">Tìm kiếm</Button>
        </Form>

        <Row className="gy-4">
          <Col md={3}>
            <div className="p-3 border bg-light">Đặt lịch khám</div>
          </Col>
          <Col md={3}>
            <div className="p-3 border bg-light">Mua thuốc trực tuyến</div>
          </Col>
          <Col md={3}>
            <div className="p-3 border bg-light">Tư vấn trực tuyến</div>
          </Col>
          <Col md={3}>
            <div className="p-3 border bg-light">Liên hệ đến chúng tôi để tham gia vào đội ngũ Nhân viên và Nha sĩ của hệ thống</div>
          </Col>
          <Col md={3}>
            <div className="p-3 border bg-light">Blog sức khỏe và răng miệng</div>
          </Col>
          <Col md={3}>
            <div className="p-3 border bg-light">Thẻ thành viên và ưu đãi</div>
          </Col>
        </Row>
      </Container>

      <footer className="bg-light mt-5 p-4 text-center">
        <Container>
          <Row>
            <Col md={4}>
              <h5>DR.CHANGCANNANG</h5>
              <p>227-Nguyễn Văn Cừ, Phường 4, Quận 5, tp.Hồ Chí Minh</p>
              <p>(+84)1900 1000</p>
              <p>email@hotro.bookapp.com.vn</p>
            </Col>
            <Col md={4}>
              <h5>NHÀ CUNG CẤP</h5>
              <p>Sản phẩm</p>
              <p>Dịch vụ</p>
              <p>Công ty</p>
            </Col>
            <Col md={4}>
              <h5>THÔNG TIN NHA SĨ</h5>
              <p>Địa chỉ công tác</p>
              <p>Chứng nhận</p>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <p>© 2022 Brand, Inc. • Privacy • Terms • Sitemap</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Home;
