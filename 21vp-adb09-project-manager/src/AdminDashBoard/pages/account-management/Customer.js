import React from 'react';
import { Container, Row, Col, Button, Form, Table, InputGroup } from 'react-bootstrap';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import HeaderAccountManagement from '../../components/HeaderAccountManagement';

const Customer = () => {
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
                <HeaderAccountManagement /> 
            </div>
            <Row className="mb-4 mt-4">
              <Col md={{ span: 4, offset: 4 }}>
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Tìm kiếm..."
                  />
                  <Button variant="outline-success">Tìm kiếm</Button>
                </InputGroup>
              </Col>
            </Row>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Mã KH</th>
                  <th>Tên Khách Hàng</th>
                  <th>Giới Tính</th>
                  <th>Email</th>
                  <th>Ngày Sinh</th>
                  <th>Hành Động</th>
                </tr>
              </thead>
              <tbody>
                {/* Example data */}
                {[
                  { id: 1, name: 'Matthew Martinez', gender: 'Nam', email: 'EmailExample@gmail.com', birthDate: '01/01/2003' },
                  { id: 2, name: 'Matthew', gender: 'Nam', email: 'EmailExample@gmail.com', birthDate: '01/01/2003' },
                  { id: 3, name: 'NName', gender: 'Nữ', email: 'EmailExample@gmail.com', birthDate: '01/01/2003' },
                  { id: 4, name: 'Tihgo', gender: 'Nữ', email: 'EmailExample@gmail.com', birthDate: '01/01/2003' },
                  { id: 5, name: 'Grakk', gender: 'Nam', email: 'EmailExample@gmail.com', birthDate: '01/01/2003' },
                  { id: 6, name: 'Full name', gender: 'Nam', email: 'EmailExample@gmail.com', birthDate: '01/01/2003' },
                  { id: 7, name: 'ContentA', gender: 'Nữ', email: 'EmailExample@gmail.com', birthDate: '01/01/2003' },
                  { id: 8, name: 'ContentB', gender: 'Nam', email: 'EmailExample@gmail.com', birthDate: '01/01/2003' },
                  { id: 9, name: 'ContentC', gender: 'Nam', email: 'EmailExample@gmail.com', birthDate: '01/01/2003' },
                ].map(customer => (
                  <tr key={customer.id}>
                    <td>{customer.id}</td>
                    <td>{customer.name}</td>
                    <td>{customer.gender}</td>
                    <td>{customer.email}</td>
                    <td>{customer.birthDate}</td>
                    <td>
                      <Button variant="outline-primary" size="sm" className="me-2">Sửa</Button>
                      <Button variant="outline-danger" size="sm" className="me-2">Xóa</Button>
                      <Button variant="outline-info" size="sm">Xem thêm</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Customer;
