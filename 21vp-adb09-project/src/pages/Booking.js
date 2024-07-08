import React from 'react';
import { Container, Form, FormControl, Button } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Booking = () => {
  return (
    <>
      <Header />

      <Container className="mt-4">
        <Form className="d-flex mb-4">
          <FormControl type="search" placeholder="Tìm kiếm nha sĩ..." className="me-2" aria-label="Search" />
          <Button variant="outline-success">Tìm kiếm</Button>
        </Form>
      </Container>

      <Footer />
    </>
  );
};

export default Booking;
