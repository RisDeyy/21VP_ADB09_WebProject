-- Tạo cơ sở dữ liệu
CREATE DATABASE DentalClinicDev;

-- Sử dụng cơ sở dữ liệu
USE DentalClinicDev;

-- Bắt đầu thử nghiệm khối giao dịch
BEGIN;

-- Tạo bảng Account
CREATE TABLE Account (
    id INT AUTO_INCREMENT PRIMARY KEY,  -- Chỉnh sửa kiểu dữ liệu thành INT
    username CHAR(10) UNIQUE NOT NULL,
    password CHAR(60) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    personnelID INT NOT NULL  -- Đã loại bỏ UNIQUE vì nó cần phải là khóa ngoại
);

-- Tạo bảng Personnel
CREATE TABLE Personnel (
    id INT AUTO_INCREMENT PRIMARY KEY,  -- Chỉnh sửa kiểu dữ liệu thành INT
    nationalID CHAR(12) UNIQUE NOT NULL,
    name VARCHAR(50) NOT NULL,
    dob DATE,
    gender CHAR(1),
    phone CHAR(10) UNIQUE NOT NULL,
    type CHAR(3) NOT NULL
);

-- Tạo bảng Patient
CREATE TABLE Patient (
    id INT PRIMARY KEY,
    drugContraindication VARCHAR(500),
    allergyStatus VARCHAR(255),
    nationalID CHAR(12) UNIQUE NOT NULL,
    name VARCHAR(50) NOT NULL,
    dob DATE,
    gender CHAR(1),
    phone CHAR(10) UNIQUE NOT NULL
);

-- Tạo bảng PaymentRecord
CREATE TABLE PaymentRecord (
    id INT AUTO_INCREMENT PRIMARY KEY,  -- Chỉnh sửa kiểu dữ liệu thành INT
    date DATE NOT NULL,
    total INT NOT NULL,
    `paid` INT NOT NULL,
    `change` INT NOT NULL,
    method CHAR(1),
    patientID INT NOT NULL
);

-- Tạo bảng Session
CREATE TABLE `Session` (
    id INT AUTO_INCREMENT PRIMARY KEY,  -- Chỉnh sửa kiểu dữ liệu thành INT
    time TIMESTAMP NOT NULL,
    note VARCHAR(1000),
    status CHAR(3) DEFAULT 'SCH',
    patientID INT NOT NULL,
    roomID INT NOT NULL,
    dentistID INT NOT NULL,
    assistantID INT,
    type CHAR(3) NOT NULL
);

-- Tạo bảng TreatmentSession
CREATE TABLE TreatmentSession (
    id INT PRIMARY KEY,
    healthNote VARCHAR(1000),
    description VARCHAR(1000),
    categoryID INT NOT NULL,
    paymentRecordID INT
);

-- Tạo bảng ExaminationSession
CREATE TABLE ExaminationSession (
    id INT PRIMARY KEY
);

-- Tạo bảng ReExaminationSession
CREATE TABLE ReExaminationSession (
    id INT PRIMARY KEY,
    relatedExaminationID INT NOT NULL
);

-- Tạo bảng Room
CREATE TABLE Room (
    id INT AUTO_INCREMENT PRIMARY KEY,  -- Chỉnh sửa kiểu dữ liệu thành INT
    code CHAR(6) UNIQUE NOT NULL,
    name VARCHAR(50) NOT NULL
);

-- Tạo bảng `Procedure`
CREATE TABLE `Procedure` (
    id INT AUTO_INCREMENT PRIMARY KEY,  -- Chỉnh sửa kiểu dữ liệu thành INT
    code CHAR(5) UNIQUE NOT NULL,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(500),
    fee INT NOT NULL,
    categoryID INT NOT NULL
);

-- Tạo bảng Category
CREATE TABLE Category (
    id INT AUTO_INCREMENT PRIMARY KEY,  -- Chỉnh sửa kiểu dữ liệu thành INT
    code CHAR(3) UNIQUE NOT NULL,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(255)
);

-- Tạo bảng Drug
CREATE TABLE Drug (
    id INT AUTO_INCREMENT PRIMARY KEY,  -- Chỉnh sửa kiểu dữ liệu thành INT
    code CHAR(17) UNIQUE NOT NULL,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(255),
    price INT NOT NULL
);

-- Tạo bảng Tooth
CREATE TABLE Tooth (
    id INT AUTO_INCREMENT PRIMARY KEY,  -- Chỉnh sửa kiểu dữ liệu thành INT
    type CHAR(1) UNIQUE NOT NULL,
    name VARCHAR(50) NOT NULL
);

-- Tạo bảng ToothSession
CREATE TABLE ToothSession (
    toothID INT,
    treatmentSessionID INT,
    `order` INT,
    PRIMARY KEY (treatmentSessionID, toothID, `order`)
);

-- Tạo bảng Prescription
CREATE TABLE Prescription (
    drugID INT NOT NULL,
    treatmentSessionID INT NOT NULL,
    note VARCHAR(500),
    PRIMARY KEY (treatmentSessionID, drugID)
);

-- Tạo bảng AppointmentRequest
CREATE TABLE AppointmentRequest (
    id INT AUTO_INCREMENT PRIMARY KEY,  -- Chỉnh sửa kiểu dữ liệu thành INT
    appointmentTime TIMESTAMP NOT NULL,
    requestTime TIMESTAMP NOT NULL,
    note VARCHAR(255),
    patientName VARCHAR(50) NOT NULL,
    patientPhone CHAR(10) NOT NULL,
    categoryName VARCHAR(50) NOT NULL
);

-- Tạo bảng Day
CREATE TABLE Day (
    id INT AUTO_INCREMENT PRIMARY KEY,  -- Chỉnh sửa kiểu dữ liệu thành INT
    day CHAR(3) UNIQUE NOT NULL
);

-- Tạo bảng Schedule
CREATE TABLE Schedule (
    dayID INT NOT NULL,
    dentistID INT NOT NULL,
    PRIMARY KEY (dayID, dentistID)
);

-- Thêm các ràng buộc khóa ngoại
ALTER TABLE Account ADD CONSTRAINT FK_Account_Personnel FOREIGN KEY (personnelID) REFERENCES Personnel(id) ON DELETE NO ACTION ON UPDATE CASCADE;
ALTER TABLE PaymentRecord ADD CONSTRAINT FK_PaymentRecord_Patient FOREIGN KEY (patientID) REFERENCES Patient(id) ON DELETE NO ACTION ON UPDATE CASCADE;
ALTER TABLE `Session` ADD CONSTRAINT FK_Session_Room FOREIGN KEY (roomID) REFERENCES Room(id) ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE `Session` ADD CONSTRAINT FK_Session_Patient FOREIGN KEY (patientID) REFERENCES Patient(id) ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE `Session` ADD CONSTRAINT FK_Session_Personnel_dentistID FOREIGN KEY (dentistID) REFERENCES Personnel(id) ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE `Session` ADD CONSTRAINT FK_Session_Personnel_assistantID FOREIGN KEY (assistantID) REFERENCES Personnel(id) ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE TreatmentSession ADD CONSTRAINT FK_TreatmentSession_Session FOREIGN KEY (id) REFERENCES `Session`(id) ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE TreatmentSession ADD CONSTRAINT FK_TreatmentSession_Category FOREIGN KEY (categoryID) REFERENCES Category(id) ON DELETE NO ACTION ON UPDATE CASCADE;
ALTER TABLE TreatmentSession ADD CONSTRAINT FK_TreatmentSession_PaymentRecord FOREIGN KEY (paymentRecordID) REFERENCES PaymentRecord(id) ON DELETE NO ACTION ON UPDATE CASCADE;
ALTER TABLE `Procedure` ADD CONSTRAINT FK_Procedure_Category FOREIGN KEY (categoryID) REFERENCES Category(id) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE Prescription ADD CONSTRAINT FK_Prescription_TreatmentSession FOREIGN KEY (treatmentSessionID) REFERENCES TreatmentSession(id) ON DELETE NO ACTION ON UPDATE CASCADE;
ALTER TABLE Prescription ADD CONSTRAINT FK_Prescription_Drug FOREIGN KEY (drugID) REFERENCES Drug(id) ON DELETE NO ACTION ON UPDATE CASCADE;
ALTER TABLE ToothSession ADD CONSTRAINT FK_ToothSession_Tooth FOREIGN KEY (toothID) REFERENCES Tooth(id) ON DELETE NO ACTION ON UPDATE CASCADE;
ALTER TABLE ToothSession ADD CONSTRAINT FK_ToothSession_TreatmentSession FOREIGN KEY (treatmentSessionID) REFERENCES TreatmentSession(id) ON DELETE NO ACTION ON UPDATE CASCADE;
ALTER TABLE ExaminationSession ADD CONSTRAINT FK_ExaminationSession_Session FOREIGN KEY (id) REFERENCES `Session`(id) ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE ReExaminationSession ADD CONSTRAINT FK_ReExaminationSession_Session FOREIGN KEY (id) REFERENCES `Session`(id) ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE ReExaminationSession ADD CONSTRAINT FK_ReExaminationSession_ExaminationSession FOREIGN KEY (relatedExaminationID) REFERENCES ExaminationSession(id) ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE Schedule ADD CONSTRAINT FK_Schedule_Day FOREIGN KEY (dayID) REFERENCES Day(id) ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE Schedule ADD CONSTRAINT FK_Schedule_Dentist FOREIGN KEY (dentistID) REFERENCES Personnel(id) ON DELETE NO ACTION ON UPDATE CASCADE;

-- Khởi tạo dữ liệu
INSERT INTO Personnel (nationalID, name, dob, gender, phone, type) VALUES ('123456789123', 'Admin', '2002-06-01', 'M', '0777058016', 'ADM');
INSERT INTO Account (username, password, email, personnelID) VALUES ('ADM-123456', '$2a$12$kWJhMbTG8bPAtf0ZO4DO..mn4hE7cecT7vhnQKW.BjzFRIR1uL2O.', 'admin@gmail.com', 1);

-- Thêm dữ liệu vào bảng Day
INSERT INTO Day (day) VALUES ('SUN'), ('MON'), ('TUE'), ('WED'), ('THU'), ('FRI'), ('SAT');

-- Thêm dữ liệu vào bảng Tooth
INSERT INTO Tooth (type, name) VALUES ('L', 'Lingual'), ('F', 'Facial'), ('D', 'Distal'), ('M', 'Mesial'), ('T', 'Top'), ('R', 'Root');

-- Thêm dữ liệu vào bảng Room
INSERT INTO Room (code, name) VALUES
('EXA-01', 'Examination Room 1'),
('EXA-02', 'Examination Room 2'),
('EXA-03', 'Examination Room 3'),
('EXA-04', 'Examination Room 4'),
('EXA-05', 'Examination Room 5'),
('SPE-01', 'Special Room 1'),
('SPE-02', 'Special Room 2'),
('EME-01', 'Emergency Room 1'),
('EME-02', 'Emergency Room 2'),
('EME-03', 'Emergency Room 3'),
('EME-04', 'Emergency Room 4');

-- Thêm dữ liệu vào bảng Category
INSERT INTO Category (code, name) VALUES
('CA1', 'Boc rang su'),
('CA2', 'Cay ghep implant'),
('CA3', 'Nieng rang tham my'),
('CA4', 'Tay trang rang'),
('CA5', 'Chinh nha');

-- Thêm dữ liệu vào bảng `Procedure`
INSERT INTO `Procedure` (code, name, fee, categoryID) VALUES
('CA1-1', 'Quet mau răng bằng máy quét Itero', 1200000, 1),
('CA1-2', 'Phân tích nụ cười bằng công nghệ Smile Design', 5000000, 1),
('CA1-3', 'Lắp răng sứ trên Implant', 2000000, 1),
('CA2-1', 'Cắm ghép 2 trụ Implant All On 4', 25000000, 2),
('CA3-1', 'Niềng răng mắc cài kim loại truyền thống', 30000000, 3),
('CA3-2', 'Niềng răng mắc cài sứ cao cấp', 42000000, 3),
('CA4-1', 'Tẩy trắng răng Laser Whitening', 2500000, 4),
('CA5-1', 'Chỉnh nha bằng máng trong Invisalign', 55000000, 5);

-- Thêm dữ liệu vào bảng Drug
INSERT INTO Drug (code, name, price) VALUES
('DRUG-001', 'Acetaminophen', 5000),
('DRUG-002', 'Ibuprofen', 7000),
('DRUG-003', 'Amoxicillin', 10000),
('DRUG-004', 'Clindamycin', 12000),
('DRUG-005', 'Metronidazole', 15000);

COMMIT;
