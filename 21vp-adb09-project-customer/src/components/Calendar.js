import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Form } from 'react-bootstrap';

const Calendar = ({ selectedDate, handleDateChange }) => {
  return (
    <div className="calendar-container">
      <Form.Group controlId="formGridDate mb-3">
        <Form.Label>Chọn ngày</Form.Label>
        <Form.Control
          type="text"
          value={selectedDate ? selectedDate.toLocaleDateString('en-GB') : ''}
          readOnly
        />
      </Form.Group>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        inline
        dateFormat="dd/MM/yyyy"
        className="custom-datepicker"
      />
    </div>
  );
};

export default Calendar;
