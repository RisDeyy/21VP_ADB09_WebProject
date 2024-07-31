import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import HeaderRevenueStatistics from '../../components/HeaderRevenueStatistics';

const NumberOfAppointments = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Header />
          <Col md={2} className="p-0">
            <Sidebar />
          </Col>
          <Col md={10} className='p-4'> 
            <div className="d-flex align-items-center justify-content-center">
                <HeaderRevenueStatistics /> 
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NumberOfAppointments;
