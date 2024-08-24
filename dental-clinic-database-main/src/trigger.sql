USE DentalClinicDev;

DELIMITER //

-- Account triggers
CREATE TRIGGER CheckPasswordLength
BEFORE INSERT ON Account
FOR EACH ROW
BEGIN
    IF LENGTH(NEW.password) <= 0 OR LENGTH(NEW.password) > 61 THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'Password length must be greater than 0 and less than 61 characters.';
    END IF;
END//

CREATE TRIGGER CheckUsernameLength
BEFORE INSERT ON Account
FOR EACH ROW
BEGIN
    IF LENGTH(NEW.username) <= 0 OR LENGTH(NEW.username) > 11 THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'Username length must be greater than 0 and less than 11 characters.';
    END IF;
END//

CREATE TRIGGER CheckEmailLength
BEFORE INSERT ON Account
FOR EACH ROW
BEGIN
    IF LENGTH(NEW.email) <= 0 OR LENGTH(NEW.email) > 51 THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'Email length must be greater than 0 and less than 51 characters.';
    END IF;
END//

-- Personnel triggers
CREATE TRIGGER CheckNationalIDLength
BEFORE INSERT ON Personnel
FOR EACH ROW
BEGIN
    IF LENGTH(NEW.nationalID) <= 0 OR LENGTH(NEW.nationalID) > 13 THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'National ID length must be greater than 0 and less than 13 characters.';
    END IF;
END//

CREATE TRIGGER CheckNameLength
BEFORE INSERT ON Personnel
FOR EACH ROW
BEGIN
    IF LENGTH(NEW.name) <= 0 OR LENGTH(NEW.name) > 51 THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'Name length must be greater than 0 and less than 51 characters.';
    END IF;
END//

CREATE TRIGGER CheckPhoneLength
BEFORE INSERT ON Personnel
FOR EACH ROW
BEGIN
    IF LENGTH(NEW.phone) <= 0 OR LENGTH(NEW.phone) > 11 THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'Phone length must be greater than 0 and less than 11 characters.';
    END IF;
END//

-- Patient triggers
CREATE TRIGGER CheckPatientNationalIDLength
BEFORE INSERT ON Patient
FOR EACH ROW
BEGIN
    IF LENGTH(NEW.nationalID) <= 0 OR LENGTH(NEW.nationalID) > 13 THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'National ID length must be greater than 0 and less than 13 characters.';
    END IF;
END//

CREATE TRIGGER CheckPatientNameLength
BEFORE INSERT ON Patient
FOR EACH ROW
BEGIN
    IF LENGTH(NEW.name) <= 0 OR LENGTH(NEW.name) > 51 THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'Name length must be greater than 0 and less than 51 characters.';
    END IF;
END//

CREATE TRIGGER CheckPatientPhoneLength
BEFORE INSERT ON Patient
FOR EACH ROW
BEGIN
    IF LENGTH(NEW.phone) <= 0 OR LENGTH(NEW.phone) > 11 THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'Phone length must be greater than 0 and less than 11 characters.';
    END IF;
END//

CREATE TRIGGER CheckPatientAllergyStatusLength
BEFORE INSERT ON Patient
FOR EACH ROW
BEGIN
    IF LENGTH(NEW.allergyStatus) <= 0 OR LENGTH(NEW.allergyStatus) > 256 THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'Allergy Status length must be greater than 0 and less than 256 characters.';
    END IF;
END//

CREATE TRIGGER CheckPatientDrugContraindicationLength
BEFORE INSERT ON Patient
FOR EACH ROW
BEGIN
    IF LENGTH(NEW.drugContraindication) <= 0 OR LENGTH(NEW.drugContraindication) > 501 THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'Drug Contraindication length must be greater than 0 and less than 501 characters.';
    END IF;
END//

-- Session triggers
CREATE TRIGGER CheckSessionNoteLength
BEFORE INSERT ON Session
FOR EACH ROW
BEGIN
    IF LENGTH(NEW.note) <= 0 OR LENGTH(NEW.note) > 1001 THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'Note length must be greater than 0 and less than 1001 characters.';
    END IF;
END//

-- TreatmentSession triggers
CREATE TRIGGER CheckHealthNoteLength
BEFORE INSERT ON TreatmentSession
FOR EACH ROW
BEGIN
    IF LENGTH(NEW.healthNote) <= 0 OR LENGTH(NEW.healthNote) > 1001 THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'Health Note length must be greater than 0 and less than 1001 characters.';
    END IF;
END//

CREATE TRIGGER CheckDescriptionLength
BEFORE INSERT ON TreatmentSession
FOR EACH ROW
BEGIN
    IF LENGTH(NEW.description) <= 0 OR LENGTH(NEW.description) > 1001 THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'Description length must be greater than 0 and less than 1001 characters.';
    END IF;
END//

-- Room triggers
CREATE TRIGGER CheckCodeLength
BEFORE INSERT ON Room
FOR EACH ROW
BEGIN
    IF LENGTH(NEW.code) <= 0 OR LENGTH(NEW.code) > 7 THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'Code length must be greater than 0 and less than 7 characters.';
    END IF;
END//

CREATE TRIGGER CheckRoomNameLength
BEFORE INSERT ON Room
FOR EACH ROW
BEGIN
    IF LENGTH(NEW.name) <= 0 OR LENGTH(NEW.name) > 51 THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'Name length must be greater than 0 and less than 51 characters.';
    END IF;
END//

-- Procedure triggers
CREATE TRIGGER CheckProcCodeLength
BEFORE INSERT ON `Procedure`
FOR EACH ROW
BEGIN
    IF LENGTH(NEW.code) <= 0 OR LENGTH(NEW.code) > 4 THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'Code length must be greater than 0 and less than 4 characters.';
    END IF;
END//

CREATE TRIGGER CheckProcNameLength
BEFORE INSERT ON `Procedure`
FOR EACH ROW
BEGIN
    IF LENGTH(NEW.name) <= 0 OR LENGTH(NEW.name) > 51 THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'Name length must be greater than 0 and less than 51 characters.';
    END IF;
END//

CREATE TRIGGER CheckProcDescriptionLength
BEFORE INSERT ON `Procedure`
FOR EACH ROW
BEGIN
    IF LENGTH(NEW.description) <= 0 OR LENGTH(NEW.description) > 256 THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'Description length must be greater than 0 and less than 256 characters.';
    END IF;
END//

-- Category triggers
CREATE TRIGGER CheckCategoryCodeLength
BEFORE INSERT ON Category
FOR EACH ROW
BEGIN
    IF LENGTH(NEW.code) <= 0 OR LENGTH(NEW.code) > 4 THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'Code length must be greater than 0 and less than 4 characters.';
    END IF;
END//

CREATE TRIGGER CheckCategoryNameLength
BEFORE INSERT ON Category
FOR EACH ROW
BEGIN
    IF LENGTH(NEW.name) <= 0 OR LENGTH(NEW.name) > 51 THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'Name length must be greater than 0 and less than 51 characters.';
    END IF;
END//

CREATE TRIGGER CheckCategoryDescriptionLength
BEFORE INSERT ON Category
FOR EACH ROW
BEGIN
    IF LENGTH(NEW.description) <= 0 OR LENGTH(NEW.description) > 256 THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'Description length must be greater than 0 and less than 256 characters.';
    END IF;
END//

-- Drug triggers
CREATE TRIGGER CheckDrugCodeLength
BEFORE INSERT ON Drug
FOR EACH ROW
BEGIN
    IF LENGTH(NEW.code) <= 0 OR LENGTH(NEW.code) > 18 THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'Code length must be greater than 0 and less than 18 characters.';
    END IF;
END//

CREATE TRIGGER CheckDrugNameLength
BEFORE INSERT ON Drug
FOR EACH ROW
BEGIN
    IF LENGTH(NEW.name) <= 0 OR LENGTH(NEW.name) > 51 THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'Name length must be greater than 0 and less than 51 characters.';
    END IF;
END//

CREATE TRIGGER CheckDrugDescriptionLength
BEFORE INSERT ON Drug
FOR EACH ROW
BEGIN
    IF LENGTH(NEW.description) <= 0 OR LENGTH(NEW.description) > 256 THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'Description length must be greater than 0 and less than 256 characters.';
    END IF;
END//

-- Tooth triggers
CREATE TRIGGER CheckToothNameLength
BEFORE INSERT ON Tooth
FOR EACH ROW
BEGIN
    IF LENGTH(NEW.name) <= 0 OR LENGTH(NEW.name) > 51 THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'Name length must be greater than 0 and less than 51 characters.';
    END IF;
END//

-- Prescription triggers
CREATE TRIGGER CheckPrescriptionNoteLength
BEFORE INSERT ON Prescription
FOR EACH ROW
BEGIN
    IF LENGTH(NEW.note) <= 0 OR LENGTH(NEW.note) > 501 THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'Note length must be greater than 0 and less than 501 characters.';
    END IF;
END//

-- AppointmentRequest triggers
CREATE TRIGGER CheckPatientNameLength
BEFORE INSERT ON AppointmentRequest
FOR EACH ROW
BEGIN
    IF LENGTH(NEW.patientName) <= 0 OR LENGTH(NEW.patientName) > 51 THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'Patient Name length must be greater than 0 and less than 51 characters.';
    END IF;
END//

CREATE TRIGGER CheckCategoryNameLength
BEFORE INSERT ON AppointmentRequest
FOR EACH ROW
BEGIN
    IF LENGTH(NEW.categoryName) <= 0 OR LENGTH(NEW.categoryName) > 51 THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'Category Name length must be greater than 0 and less than 51 characters.';
    END IF;
END//

CREATE TRIGGER CheckPatientPhoneLength
BEFORE INSERT ON AppointmentRequest
FOR EACH ROW
BEGIN
    IF LENGTH(NEW.patientPhone) <= 0 OR LENGTH(NEW.patientPhone) > 11 THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'Patient phone length must be greater than 0 and less than 11 characters.';
    END IF;
END//

CREATE TRIGGER CheckNoteLength
BEFORE INSERT ON AppointmentRequest
FOR EACH ROW
BEGIN
    IF LENGTH(NEW.note) <= 0 OR LENGTH(NEW.note) > 256 THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'Note length must be greater than 0 and less than 256 characters.';
    END IF;
END//

DELIMITER ;