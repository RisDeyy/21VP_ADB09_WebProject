import React from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import '../css/UserAccount.css'; // Import CSS file for custom styling

const UserAccount = () => {
  return (
    <Container className="mt-4">
      <Card className="user-account-card p-4">
        <h2>Thông Tin Tài Khoản</h2>
        <Row>
          <Col md={4} className="d-flex justify-content-center">
            <div className="user-avatar mb-3">
              <img src="https://kiemtientuweb.com/ckfinder/userfiles/images/avatar-fb/avatar-fb-1.jpg" alt="User Avatar" className="rounded-circle" />
            </div>
          </Col>
          <Col md={8}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Username</Card.Title>
                <Card.Text>
                  <strong>Email:</strong> email_user@gmail.com <br />
                  <strong>Số điện thoại:</strong> 09xx 3xx 341 <br />
                  <strong>Địa chỉ:</strong> quận 7, thành phố Hồ Chí Minh
                </Card.Text>
                <Button variant="primary" className="me-2">Chỉnh sửa</Button>
                <Button variant="secondary">Đổi mật khẩu</Button>
              </Card.Body>
            </Card>
            <Button variant="dark" className="w-100 mt-3">Xem hồ sơ khám bệnh</Button>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default UserAccount;
