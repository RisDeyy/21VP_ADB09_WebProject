import React, { useContext, useState } from 'react';
import { Container, Form, FormControl, Button, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AppointmentContext } from '../contexts/AppointmentContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Calendar from '../components/Calendar';

const Booking = () => {
  const navigate = useNavigate();
  const { setAppointmentData } = useContext(AppointmentContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    symptoms: '',
    time: '08:00 - 08:45',
    date: new Date()
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      date: date
    });
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setAppointmentData({
      ...formData,
      date: formData.date.toISOString().split('T')[0] // Ensure the date is in 'YYYY-MM-DD' format
    });
    navigate('/booking/choose-appointment');
  };

  return (
    <>
      <Header />
      <Container className="mt-4">
        <Form className="d-flex mb-4">
          <FormControl type="search" placeholder="Tìm kiếm nha sĩ..." className="me-2" aria-label="Search" />
          <Button variant="outline-success">Tìm kiếm</Button>
        </Form>
      </Container>

      <Container className="mt-4">
        <Card>
          <Card.Header as="h5" className="text-center">Tìm kiếm lịch hẹn</Card.Header>
          <Card.Body>
            <Row>
              <h5>Thông tin buổi hẹn</h5>
              <Col md={6}>
                <Form onSubmit={handleSearch}>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                      <Form.Label>Họ tên</Form.Label>
                      <Form.Control type="text" 
                                    placeholder="Nhập họ tên..." 
                                    name="name" 
                                    value={formData.name} 
                                    onChange={handleChange} 
                                    required 
                                  />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" 
                                    placeholder="Nhập email..." 
                                    name="email" 
                                    value={formData.email} 
                                    onChange={handleChange} 
                                    required 
                                  />
                    </Form.Group>
                  </Row>

                  <Form.Group className="mb-3" controlId="formGridPhoneNumber">
                    <Form.Label>Số điện thoại</Form.Label>
                    <Form.Control type="text" 
                                  placeholder="Nhập số điện thoại..." 
                                  name="phone" 
                                  value={formData.phone} 
                                  onChange={handleChange} 
                                  required 
                                />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formGridDescription">
                    <Form.Label>Mô tả triệu chứng</Form.Label>
                    <Form.Control type="text" 
                                  placeholder="Nhập mô tả triệu chứng..." 
                                  name="symptoms" 
                                  value={formData.symptoms} 
                                  onChange={handleChange} 
                                  required 
                                />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formGridTime">
                    <Form.Label>Thời điểm hẹn</Form.Label>
                    <Form.Select name="time" value={formData.time} onChange={handleChange} required>
                      <option>08:00 - 08:45</option>
                      <option>09:00 - 09:45</option>
                      <option>11:00 - 11:45</option>
                      <option>12:00 - 12:45</option>
                      <option>13:00 - 13:45</option>
                      <option>14:00 - 14:45</option>
                      <option>15:00 - 15:45</option>
                      <option>16:00 - 16:45</option>
                      <option>17:00 - 17:45</option>
                      <option>18:00 - 18:45</option>
                      <option>19:00 - 19:45</option>
                    </Form.Select>
                  </Form.Group>
                </Form>
              </Col>
              <Col md={6}>
                <Calendar selectedDate={formData.date} handleDateChange={handleDateChange} />
              </Col>
            </Row>
            <Button variant="primary" type="submit" className="w-100 mt-3" onClick={handleSearch}>
              Tìm kiếm
            </Button>
          </Card.Body>
        </Card>
      </Container>

      <Footer />
    </>
  );
};

export default Booking;
