import React, { useContext } from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { AppointmentContext } from '../contexts/AppointmentContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Confirm = () => {
  const { appointmentData } = useContext(AppointmentContext);

  return (
    <>
      <Header />
      <Container className="mt-4">
        <Card>
          <Card.Header as="h5" className="text-center">Xác nhận đặt lịch</Card.Header>
          <Card.Body>
            <Row className='p-5'>
              <Col md={6}>
                <h5 className='mt-3 mb-5 fw-bold'>Thông tin người dùng</h5>
                <p><strong>Mã khách hàng:</strong> {appointmentData.customerId}</p>
                <p><strong>Họ tên:</strong> {appointmentData.name}</p>
                <p><strong>Email:</strong> {appointmentData.email}</p>
                <p><strong>Số điện thoại:</strong> {appointmentData.phone}</p>
                <p><strong>Mô tả triệu chứng:</strong> {appointmentData.symptoms}</p>
              </Col>
              <Col md={6}>
                <h5 className='mt-3 mb-5 fw-bold'>Thông tin buổi hẹn</h5>
                <p><strong>Ngày khám:</strong> {appointmentData.date}</p>
                <p><strong>Thời gian:</strong> {appointmentData.time}</p>
                <p><strong>Nha sĩ phụ trách:</strong> {appointmentData.dentist}</p>
                <p><strong>Phí dịch vụ:</strong> {appointmentData.price}</p>
              </Col>
            </Row>
            <Button variant="primary" className="w-100 mt-3">
              Xác nhận đặt lịch
            </Button>
          </Card.Body>
        </Card>
      </Container>
      <Footer />
    </>
  );
};

export default Confirm;
