import React, { useContext } from 'react';
import { Container, ListGroup, Button } from 'react-bootstrap';
import { AppointmentContext } from '../contexts/AppointmentContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/ChooseAppointment.css';

const ChooseAppointment = () => {
  const { appointmentData } = useContext(AppointmentContext);

  // Dữ liệu giả lập cho các buổi hẹn
  const appointments = [
    { name: 'Nguyễn Văn A', time: '13:00 - 13:45', price: '100.000vnd/buổi' },
    { name: 'Nguyễn Văn F', time: '13:00 - 13:45', price: '100.000vnd/buổi' },
    { name: 'Phan Văn A', time: '13:00 - 13:45', price: '100.000vnd/buổi' },
    { name: 'Lò Thị ABC', time: '13:00 - 13:45', price: '100.000vnd/buổi' },
    { name: 'Trần Văn B', time: '13:00 - 13:45', price: '100.000vnd/buổi' },
    { name: 'Lê Thị C', time: '14:00 - 14:45', price: '100.000vnd/buổi' },
    { name: 'Nguyễn Văn D', time: '15:00 - 15:45', price: '100.000vnd/buổi' },
    { name: 'Trần Văn E', time: '16:00 - 16:45', price: '100.000vnd/buổi' },
    { name: 'Lê Thị F', time: '17:00 - 17:45', price: '100.000vnd/buổi' }
  ];

  // Lọc các buổi hẹn theo thời gian đã chọn
  const filteredAppointments = appointments.filter(app => app.time === appointmentData?.time);

  return (
    <>
      <Header />
      <Container className="mt-4">
        <h2 className="text-center">Một số buổi hẹn</h2>
        <div className="appointment-list" style={{ maxHeight: '600px', overflowY: 'auto' }}>
          <ListGroup>
            {filteredAppointments.map((appointment, index) => (
              <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                <div>
                  <h5>Nha sĩ: {appointment.name}</h5>
                  <p>Thông tin nha sĩ</p>
                </div>
                <div>
                  <p>Thời gian: {appointment.time}</p>
                  <p>{appointment.price}</p>
                  <Button variant="primary">Chọn</Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default ChooseAppointment;
