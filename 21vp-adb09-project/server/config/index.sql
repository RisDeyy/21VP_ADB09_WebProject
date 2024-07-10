CREATE DATABASE IF NOT EXISTS dental_clinic;
USE dental_clinic;

-- Tạo bảng User
CREATE TABLE User (
    UserID INT PRIMARY KEY AUTO_INCREMENT,
    Email VARCHAR(255) UNIQUE NOT NULL CHECK (Email LIKE '%@%'),
    Fullname VARCHAR(255) NOT NULL,
    Gender CHAR(1) CHECK (Gender IN ('1', '0')),
    DOB DATE NOT NULL,
    Password VARCHAR(255) NOT NULL,
    Role VARCHAR(50) CHECK (Role IN ('Admin', 'Employee', 'Dentist', 'Customer'))
);

-- Tạo bảng Admin
CREATE TABLE Admin (
    UserID INT,
    Certificate VARCHAR(255) NOT NULL,
    Degree VARCHAR(255) NOT NULL,
    PRIMARY KEY (UserID),
    FOREIGN KEY (UserID) REFERENCES User(UserID)
);

-- Tạo bảng Employee
CREATE TABLE Employee (
    UserID INT,
    Certificate VARCHAR(255) NOT NULL,
    Degree VARCHAR(255) NOT NULL,
    PRIMARY KEY (UserID),
    FOREIGN KEY (UserID) REFERENCES User(UserID)
);

-- Tạo bảng Dentist
CREATE TABLE Dentist (
    UserID INT,
    Certificate VARCHAR(255) NOT NULL,
    Degree VARCHAR(255) NOT NULL,
    Description VARCHAR(255) NOT NULL,
    WorkPlace VARCHAR(255) NOT NULL,
    PhoneNumber VARCHAR(10) UNIQUE NOT NULL CHECK (PhoneNumber REGEXP '^[0-9]{10}$'),
    PRIMARY KEY (UserID),
    FOREIGN KEY (UserID) REFERENCES User(UserID)
);


-- Tạo bảng Customer
CREATE TABLE Customer (
    UserID INT,
    PhoneNumber VARCHAR(10) UNIQUE NOT NULL CHECK (PhoneNumber REGEXP '^[0-9]{10}$'),
    PRIMARY KEY (UserID),
    FOREIGN KEY (UserID) REFERENCES User(UserID)
);

-- Tạo bảng Schedule
CREATE TABLE Schedule (
    ScheduleID INT PRIMARY KEY AUTO_INCREMENT,
    Date DATE NOT NULL,
    StartTime VARCHAR(50) NOT NULL
);

-- Tạo bảng Appointment
CREATE TABLE Appointment (
    AppointmentID INT PRIMARY KEY AUTO_INCREMENT,
    Date DATE NOT NULL,
    StartTime VARCHAR(50) NOT NULL,
    SymptomDescription VARCHAR(255) NOT NULL,
    Service VARCHAR(255) CHECK (Service IN ('Nho rang', 'Tram rang', 'lam trang rang', '...')),
    DentistInCharge INT,
    CustomerInformationID INT NOT NULL,
    FOREIGN KEY (DentistInCharge) REFERENCES Dentist(UserID),
    FOREIGN KEY (CustomerInformationID) REFERENCES CustomerInformation(CustomerInformationID)
);

-- Tạo bảng CustomerInformation
CREATE TABLE CustomerInformation (
    CustomerInformationID INT PRIMARY KEY AUTO_INCREMENT,
    FullName VARCHAR(255) NOT NULL,
    PhoneNumber VARCHAR(10) UNIQUE NOT NULL CHECK (PhoneNumber REGEXP '^[0-9]{10}$'),
    Email VARCHAR(255) UNIQUE NOT NULL CHECK (Email LIKE '%@%'),
    Gender VARCHAR(1) CHECK (Gender IN ('1', '0')),
    Address VARCHAR(255)
);

-- Tạo bảng Drug
CREATE TABLE Drug (
    DrugID INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(255) NOT NULL,
    Quantity INT NOT NULL CHECK (Quantity >= 0)
);

-- Tạo bảng DrugDetail
CREATE TABLE DrugDetail (
    Name VARCHAR(255) PRIMARY KEY,
    Effect VARCHAR(255) NOT NULL,
    Description VARCHAR(255),
    Manual VARCHAR(255) NOT NULL,
    Price INT NOT NULL CHECK (Price >= 0)
);

-- Tạo bảng Service
CREATE TABLE Service (
    ServiceID INT PRIMARY KEY AUTO_INCREMENT,
    ServiceName VARCHAR(255) NOT NULL,
    Price INT CHECK (Price >= 0),
    DentistInCharge INT,
    FOREIGN KEY (DentistInCharge) REFERENCES Dentist(UserID)
);

-- Tạo bảng Bill
CREATE TABLE Bill (
    BillID INT PRIMARY KEY AUTO_INCREMENT,
    Service VARCHAR(255) NOT NULL,
    ListofDrugs VARCHAR(255),
    TotalPrice INT NOT NULL CHECK (TotalPrice >= 0)
);
