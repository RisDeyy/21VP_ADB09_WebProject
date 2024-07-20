import React from 'react';
import { Card, Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/Home.css';
import '../css/Blog.css';

const blogsData = [
  {
    title: 'Răng sâu thế nào là đẹp?',
    image: '/img/image1.jpg',
    link: '/blog/1'
  },
  {
    title: 'Những thực phẩm tốt cho người mới thay răng',
    image: '/img/image2.jpg',
    link: '/blog/2'
  },
  {
    title: 'Mẹo vệ sinh răng miệng nhanh nhưng không sạch',
    image: '/img/image3.jpg',
    link: '/blog/3'
  },
  {
    title: 'Thực phẩm gây hại đến răng miệng',
    image: '/img/image4.jpg',
    link: '/blog/4'
  },
  {
    title: 'Chữa trị hôi miệng thế nào?',
    image: '/img/image5.jpg',
    link: '/blog/5'
  },
  {
    title: 'Liệu trình cho người thay răng già',
    image: '/img/image6.jpg',
    link: '/blog/6'
  },
];

const Home = () => {
  return (
    <>
      <Header />

      <Container className="mt-4">
        <Form className="d-flex mb-4">
          <FormControl type="search" placeholder="Tìm kiếm..." className="me-2" aria-label="Search" />
          <Button variant="outline-success">Tìm kiếm</Button>
        </Form>
      </Container>

      <Container  className='section mt-5 mb-4 fw-bold text-center'>
        <div> Dịch Vụ </div>
      </Container>
      
      <Container className="mt-4">
        <Row className="gy-4 pb-3">
          <Col md={4}>
            <a href="/booking">
              <div className="p-3 border form-service">Đặt lịch khám</div>
            </a>
            
          </Col>
          <Col md={4}>
           <a href="/">
            <div className="p-3 border form-service">Mua thuốc trực tuyến</div>
           </a>
          </Col>
          <Col md={4}>
            <a href="/">
              <div className="p-3 border form-service">Tư vấn trực tuyến</div>
            </a>
          </Col>
        </Row>

        <Row className="gy-4 pb-3">
          <Col md={12}>
            <a href="/about">
              <div className="p-3 border form-service">Liên hệ đến chúng tôi để tham gia vào đội ngũ Nhân viên và Nha sĩ của hệ thống</div>
            </a>
          </Col>
        </Row>

        <Row className="gy-4 pb-3">
          <Col md={6}>
            <a href="/blog">
              <div className="p-3 border form-service">Blog sức khỏe và răng miệng</div>
            </a>
          </Col>
          <Col md={6}>
            <a href="user-account">
              <div className="p-3 border form-service">Thẻ thành viên và ưu đãi</div>
            </a>
          </Col>
        </Row>
      </Container>

      <Container  className='section mt-5 mb-4 fw-bold text-center'>
        <div> Bài Viết Nổi Bật </div>
      </Container>

      <Container  className='mt-4'>
        <Row>
          {blogsData.map((blog, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card>
                <div className="image-container">
                  <Card.Img variant="top" src={blog.image} className="fixed-size-img" />
                </div>
                <Card.Body>
                  <Card.Title>{blog.title}</Card.Title>
                  <Button variant="primary" href={blog.link}>Đọc thêm</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default Home;
