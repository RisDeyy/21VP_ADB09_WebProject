import React from 'react';
import { Container, Card, Row, Col, Button, NavLink } from 'react-bootstrap';
import '../css/UserAccount.css'; 

const UserAccount = () => {
  return (
    <Container className="mt-4">
      <Row>
        <div className='fw-bold d-flex mb-5'>
          <NavLink href="/home" className='home me-1'>Trang chủ </NavLink>
           / Thông tin cá nhân 
        </div>
        
        <Col md={4} className="d-flex justify-content-center">
          <Card >
            <div className="user-avatar mb-3">
              <img src="https://kiemtientuweb.com/ckfinder/userfiles/images/avatar-fb/avatar-fb-1.jpg" alt="User Avatar" className="rounded-circle p-2" />
            </div>
            <div className='text-center fw-bold pb-2 user-name'>User name</div>
          </Card>
        </Col>
        <Col md={8}>
          <Card className="mb-3 p-5">
            <Card.Body>
              <Card.Title className='user-name'>User name</Card.Title>
              <Card.Text className='mt-5 mb-5 text-attribute'>
                <strong>Email:</strong> email_user@gmail.com <br />
                <strong>Số điện thoại:</strong> 09xx 3xx 341 <br />
                <strong>Địa chỉ:</strong> quận 7, thành phố Hồ Chí Minh
              </Card.Text>
              <hr />
              <Button variant="primary" className="me-2">Chỉnh sửa</Button>
              <Button variant="secondary">Đổi mật khẩu</Button>
            </Card.Body>
          </Card>
          <Button variant="dark" className="w-100 mt-3 p-2">Xem hồ sơ khám bệnh</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default UserAccount;
