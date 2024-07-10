-- Insert data into User table
INSERT INTO User (Email, Fullname, Gender, DOB, Password, Role)
VALUES 
('dentist1@example.com', 'Dr. John Doe', '1', '1980-01-01', 'password1', 'Dentist'),
('dentist2@example.com', 'Dr. Jane Smith', '0', '1985-05-05', 'password2', 'Dentist'),
('customer1@example.com', 'Alice Johnson', '0', '1990-10-10', 'password3', 'Customer'),
('customer2@example.com', 'Bob Brown', '1', '1995-12-12', 'password4', 'Customer');

-- Insert data into Dentist table
INSERT INTO Dentist (UserID, Certificate, Degree, Description, WorkPlace, PhoneNumber)
VALUES 
(1, 'Cert123', 'DDS', 'Expert in general dentistry', 'Dental Clinic A', '1234567890'),
(2, 'Cert456', 'DMD', 'Specialist in orthodontics', 'Dental Clinic B', '0987654321');

-- Insert data into Customer table
INSERT INTO Customer (UserID, PhoneNumber)
VALUES 
(3, '1122334455'),
(4, '5566778899');
