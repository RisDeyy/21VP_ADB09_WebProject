import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-light mt-5 p-4 text-center">
      <Container>
        <Row>
          <Col md={4}>
            <h5 className='pb-4'>DR.CHANGCANNANG</h5>
            <p>227-Nguyễn Văn Cừ, Phường 4, Quận 5, tp.Hồ Chí Minh</p>
            <p>(+84)1900 1000</p>
            <p>email@hotro.bookapp.com.vn</p>
          </Col>
          <Col md={4}>
            <h5 className='pb-4'>NHÀ CUNG CẤP</h5>
            <p>Sản phẩm</p>
            <p>Dịch vụ</p>
            <p>Công ty</p>
          </Col>
          <Col md={4}>
            <h5 className='pb-4'>THÔNG TIN NHA SĨ</h5>
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
  );
};

export default Footer;
