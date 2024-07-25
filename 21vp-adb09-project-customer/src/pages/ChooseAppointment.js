import React, { useContext } from 'react';
import { Container, ListGroup, Button } from 'react-bootstrap';
import { AppointmentContext } from '../contexts/AppointmentContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/ChooseAppointment.css';
import { useNavigate } from 'react-router-dom';

const ChooseAppointment = () => {
  const navigate = useNavigate();
  const { appointmentData, setAppointmentData } = useContext(AppointmentContext);

  const appointments = [
    { name: 'Nguyễn Văn A', time: '13:00 - 13:45', date: '2024-07-27', price: '100.000vnd/buổi' },
    { name: 'Nguyễn Văn F', time: '13:00 - 13:45', date: '2024-07-27', price: '100.000vnd/buổi' },
    { name: 'Phan Văn A', time: '13:00 - 13:45', date: '2024-07-28', price: '100.000vnd/buổi' },
    { name: 'Lò Thị ABC', time: '13:00 - 13:45', date: '2024-07-25', price: '100.000vnd/buổi' },
    { name: 'Trần Văn B', time: '13:00 - 13:45', date: '2024-07-25', price: '100.000vnd/buổi' },
    { name: 'Lê Thị C', time: '14:00 - 14:45', date: '2024-07-26', price: '100.000vnd/buổi' },
    { name: 'Nguyễn Văn D', time: '15:00 - 15:45', date: '2024-07-26', price: '100.000vnd/buổi' },
    { name: 'Trần Văn E', time: '15:00 - 15:45', date: '2024-07-26', price: '100.000vnd/buổi' },
    { name: 'Lê Thị F', time: '17:00 - 17:45', date: '2024-07-24', price: '100.000vnd/buổi' },
    { name: 'Trần Văn hgdg', time: '13:00 - 13:45', date: '2024-07-28', price: '100.000vnd/buổi' },
    { name: 'Lê Thị Phụng', time: '13:00 - 13:45', date: '2024-07-28', price: '100.000vnd/buổi' }
  ];

  const filteredAppointments = appointments.filter(app => 
    app.time === appointmentData?.time
    && app.date === appointmentData?.date
  );

  const handleSelect = (appointment) => {
    setAppointmentData({
      ...appointmentData,
      dentist: appointment.name,
      price: appointment.price
    });
    navigate('/booking/choose-appointment/confirm-appointment');
  };

  return (
    <>
      <Header />
      <Container className="mt-4">
        <h4 className="text-center">Một số buổi hẹn</h4>
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
                  <p>Ngày: {appointment.date}</p>
                  <p>{appointment.price}</p>
                  <Button variant="primary" onClick={() => handleSelect(appointment)}>Chọn</Button>
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

