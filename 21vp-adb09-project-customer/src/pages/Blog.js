import React from 'react';
import { Container, Row, Col, Card, Pagination, Form, FormControl, Button } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
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

const Blogs = () => {
  return (
    <>
      <Header />

      <Container className="mt-4 mb-8">

        <Form className="d-flex mt-6 mb-4 justify-content-center">
          <FormControl type="search" placeholder="Tìm kiếm dịch vụ..." className="me-2" aria-label="Search" />
          <Button variant="outline-success">Tìm kiếm</Button>
        </Form>
        
        <Row>
          {blogsData.map((blog, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card >
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
        
        <Pagination className="justify-content-center">
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          {/* <Pagination.Ellipsis />
          <Pagination.Item>{10}</Pagination.Item> */}
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </Container>

      <Footer />
    </>
  );
};

export default Blogs;
