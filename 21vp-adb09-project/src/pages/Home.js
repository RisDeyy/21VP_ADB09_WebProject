import React from 'react';
import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/Home.css';

const Home = () => {
  return (
    <>
      <Header />

      <Container className="mt-4">
        <Form className="d-flex mb-4">
          <FormControl type="search" placeholder="Tìm kiếm dịch vụ..." className="me-2" aria-label="Search" />
          <Button variant="outline-success">Tìm kiếm</Button>
        </Form>
      </Container>

      <Container  className='section mt-5 mb-4 fw-bold text-center'>
        <div> Dịch Vụ </div>
      </Container>
      
      <Container className="mt-4">
        <Row className="gy-4 pb-3">
          <Col md={4}>
            <div className="p-3 border form-service">Đặt lịch khám</div>
          </Col>
          <Col md={4}>
            <div className="p-3 border form-service">Mua thuốc trực tuyến</div>
          </Col>
          <Col md={4}>
            <div className="p-3 border form-service">Tư vấn trực tuyến</div>
          </Col>
        </Row>

        <Row className="gy-4 pb-3">
          <Col md={12}>
            <div className="p-3 border form-service">Liên hệ đến chúng tôi để tham gia vào đội ngũ Nhân viên và Nha sĩ của hệ thống</div>
          </Col>
        </Row>

        <Row className="gy-4 pb-3">
          <Col md={6}>
            <div className="p-3 border form-service">Blog sức khỏe và răng miệng</div>
          </Col>
          <Col md={6}>
            <div className="p-3 border form-service">Thẻ thành viên và ưu đãi</div>
          </Col>
        </Row>
      </Container>

      <Container  className='section mt-5 mb-4 fw-bold text-center'>
        <div> Bài Viết Nổi Bật </div>
      </Container>

      <Footer />
    </>
  );
};

export default Home;
