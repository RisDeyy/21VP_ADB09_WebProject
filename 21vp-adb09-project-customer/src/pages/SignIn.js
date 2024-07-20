import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import '../css/SignIn.css'; 

const SignIn = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Form className="sign-in-form p-4 rounded shadow">
        <h2 className="text-center mb-4">Đăng Nhập</h2>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Nhập email" required />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control type="password" placeholder="Nhập mật khẩu" required />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox" className="my-3">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Đăng Nhập
        </Button>
        <div className="text-center mt-3">
          <div>Chưa có tài khoản?</div>
          <a href="/sign-up"> Đăng ký ngay</a>
        </div>
      </Form>
    </Container>
  );
};

export default SignIn;
