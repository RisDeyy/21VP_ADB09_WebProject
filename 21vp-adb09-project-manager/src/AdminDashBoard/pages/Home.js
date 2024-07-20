import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import '../css/Home.css';

const Home = () => {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Header />
          <Col md={2} className="p-0">
            <Sidebar />
          </Col>
          <Col md={6} className="d-flex align-items-center justify-content-center">
            <div className="content text-center">
              <h2 className="h2">Hello admin Ris !!!</h2>
              <p className="welcome-text">Chào mừng bạn đã trở lại với hệ thống</p>
            </div>
          </Col>
          <Col  md={4}>
            <div className="image-container ms-4">
                <img src="./img/management.jpg" className="img-fluid image" alt="Responsive" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
