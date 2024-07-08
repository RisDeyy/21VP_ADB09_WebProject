import React from 'react';
import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header />

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

      <Footer />
    </>
  );
};

export default Home;
