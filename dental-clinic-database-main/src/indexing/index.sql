-- Indexing
CREATE INDEX idx_payment_record_patient_id ON PaymentRecord(patientID);

CREATE INDEX idx_appointment_req_appointment_time ON AppointmentRequest(appointmentTime);
CREATE INDEX idx_appointment_req_request_time ON AppointmentRequest(requestTime);

CREATE INDEX idx_session_time ON Session(time);
CREATE INDEX idx_session_patient_id ON Session(patientID);
CREATE INDEX idx_session_dentist_id ON Session(dentistID);
