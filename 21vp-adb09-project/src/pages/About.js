import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faClock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../css/About.css';

const About = () => {
  return (
    <>
      <Header />

      <section className="contact spad">
        <Container>
          <Row className="mb-4">
            <Col lg={3} md={3} sm={6} className="text-center">
              <div className="contact__widget">
                <FontAwesomeIcon icon={faPhone} className="icon_phone" />
                <h4>Số điện thoại</h4>
                <p>1900.1000</p>
              </div>
            </Col>
            <Col lg={3} md={3} sm={6} className="text-center">
              <div className="contact__widget">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="icon_pin_alt" />
                <h4>Địa chỉ</h4>
                <p>227, Nguyễn Văn Cừ, Quận 5, tp.Hồ Chí Minh</p>
              </div>
            </Col>
            <Col lg={3} md={3} sm={6} className="text-center">
              <div className="contact__widget">
                <FontAwesomeIcon icon={faClock} className="icon_clock_alt" />
                <h4>Thời gian mở cửa</h4>
                <p>08:00AM tới 21:00PM </p>
              </div>
            </Col>
            <Col lg={3} md={3} sm={6} className="text-center">
              <div className="contact__widget">
                <FontAwesomeIcon icon={faEnvelope} className="icon_mail_alt" />
                <h4>Email</h4>
                <p>Admin@example.com</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <div className="map mb-4">
        <Container>
          <Row>
            <Col lg={12}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3919.635793990346!2d106.6797513!3d10.7625269!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1bf8da4697%3A0x5c1e00e1d6a2b7a6!2zSSwgMjI3IMSQLiBOZ3V54buFbiBWxINuIEPhu6ssIFBoxrDhu51uZyA0LCBRdeG6rW4gNSwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrCBNaW5oIDUwMDAwMCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1689230717615!5m2!1sen!2s"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="contact-form spad">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="contact__form__title mb-4">
                <h2 className="text-center fw-bold">Để lại tin nhắn</h2>
              </div>
            </Col>
          </Row>
          <Form action="#">
            <Row>
              <Col lg={6} md={6}>
                <Form.Control type="text" placeholder="Họ tên" className="mb-3" />
              </Col>
              <Col lg={6} md={6}>
                <Form.Control type="email" placeholder="Email" className="mb-3" />
              </Col>
              <Col lg={12} className="text-center">
                <Form.Control as="textarea" placeholder="Tin nhắn..." rows={3} className="mb-3" />
                <Button type="submit" className="site-btn">Gửi tin nhắn</Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>

      <Footer />
    </>
  );
};

export default About;
