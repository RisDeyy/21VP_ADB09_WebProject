import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import '../css/SignUp.css'; // Import CSS file for custom styling

const SignUp = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Form className="sign-up-form p-4 rounded shadow">
        <h2 className="text-center mb-4">Đăng Ký</h2>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Nhập email" required />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="mt-3">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control type="password" placeholder="Nhập mật khẩu" required />
        </Form.Group>

        <Form.Group controlId="formBasicConfirmPassword" className="mt-3">
          <Form.Label>Xác nhận mật khẩu</Form.Label>
          <Form.Control type="password" placeholder="Xác nhận mật khẩu" required />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100 mt-4">
          Đăng Ký
        </Button>
        <div className="text-center mt-3">
            <div>Đã có tài khoản? </div>
          <a href="/sign-in">Đăng nhập</a>
        </div>
      </Form>
    </Container>
  );
};

export default SignUp;
