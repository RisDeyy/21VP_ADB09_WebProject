DELIMITER //

-- Xóa thủ tục viewAppointment nếu đã tồn tại
DROP PROCEDURE IF EXISTS viewAppointment//
CREATE PROCEDURE viewAppointment()
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        RESIGNAL;
    END;

    START TRANSACTION;
    SELECT patientName, patientPhone FROM AppointmentRequest;
    COMMIT;
END//

-- Xóa thủ tục delAppoint nếu đã tồn tại
DROP PROCEDURE IF EXISTS delAppoint//
CREATE PROCEDURE delAppoint(IN appointmentID INT)
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        RESIGNAL;
    END;

    START TRANSACTION;
    DELETE FROM AppointmentRequest WHERE id = appointmentID;
    COMMIT;
END//

-- Xóa thủ tục checkPatientIsExamined nếu đã tồn tại
DROP PROCEDURE IF EXISTS checkPatientIsExamined//
CREATE PROCEDURE checkPatientIsExamined(IN patientPhone CHAR(10))
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        RESIGNAL;
    END;

    START TRANSACTION;
    IF EXISTS (SELECT id FROM Patient WHERE phone = patientPhone) THEN
        SELECT S.id, S.dentistID, S.patientID, S.status, S.time, S.type 
        FROM Patient P 
        INNER JOIN Session S ON S.patientID = P.id 
        WHERE P.phone = patientPhone;
    ELSE
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Patient not found.';
    END IF;
    COMMIT;
END//

-- Xóa thủ tục createNewExaminationSession nếu đã tồn tại
DROP PROCEDURE IF EXISTS createNewExaminationSession//
CREATE PROCEDURE createNewExaminationSession(
    IN patientPhone CHAR(10),
    IN note VARCHAR(1000),
    IN roomID INT,
    IN dentistID INT
)
BEGIN
    DECLARE PatientID INT;
    DECLARE SessionID INT;

    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        RESIGNAL;
    END;

    START TRANSACTION;
    IF EXISTS (SELECT id FROM Patient WHERE phone = patientPhone) THEN
        SELECT id INTO PatientID FROM Patient WHERE phone = patientPhone;
        INSERT INTO Session(time, patientID, note, type, roomID, dentistID)
        VALUES (NOW(), PatientID, note, 'EXA', roomID, dentistID);
        
        SET SessionID = LAST_INSERT_ID();
        INSERT INTO ExaminationSession(id) VALUES (SessionID);
    END IF;
    COMMIT;
END//

-- Xóa thủ tục createNewReExaminationSession nếu đã tồn tại
DROP PROCEDURE IF EXISTS createNewReExaminationSession//

-- Xóa thủ tục viewAvailableDentist nếu đã tồn tại
DROP PROCEDURE IF EXISTS viewAvailableDentist//
CREATE PROCEDURE viewAvailableDentist(IN day INT)
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        RESIGNAL;
    END;

    START TRANSACTION;
    IF day BETWEEN 1 AND 7 THEN
        SELECT * FROM SCHEDULE S 
        JOIN Personnel P ON P.id = S.dentistID 
        WHERE S.dayID = day;
    END IF;
    COMMIT;
END//

-- Xóa thủ tục createNewPayment nếu đã tồn tại
DROP PROCEDURE IF EXISTS createNewPayment//
CREATE PROCEDURE createNewPayment(
    IN patientPhone CHAR(10),
    IN total INT,
    IN `change` INT,
    IN paid INT
)
BEGIN
    DECLARE PatientID INT;

    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        RESIGNAL;
    END;

    START TRANSACTION;
    SELECT id INTO PatientID FROM Patient WHERE phone = patientPhone;
    IF PatientID IS NOT NULL THEN
        INSERT INTO PaymentRecord(date, total, paid, `change`, patientID)
        VALUES (CURDATE(), total, paid, `change`, PatientID);
    END IF;
    COMMIT;
END//

-- Xóa thủ tục updatePayment nếu đã tồn tại
DROP PROCEDURE IF EXISTS updatePayment//
CREATE PROCEDURE updatePayment(
    IN patientPhone CHAR(10),
    IN paid INT,
    IN method CHAR(1),
    IN date TIMESTAMP
)
BEGIN
    DECLARE PatientID INT;

    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        RESIGNAL;
    END;

    START TRANSACTION;
    SELECT id INTO PatientID FROM Patient WHERE phone = patientPhone;
    IF PatientID IS NOT NULL THEN
        UPDATE PaymentRecord
        SET paid = paid, method = method, date = CURDATE()
        WHERE patientID = PatientID AND date = date;
    END IF;
    COMMIT;
END//

-- Xóa thủ tục viewPaymentRecord nếu đã tồn tại
DROP PROCEDURE IF EXISTS viewPaymentRecord//
CREATE PROCEDURE viewPaymentRecord(IN patientID INT)
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        RESIGNAL;
    END;

    START TRANSACTION;
    SELECT * FROM PaymentRecord WHERE patientID = patientID;
    COMMIT;
END//

-- Xóa thủ tục createNewTreatmentSession nếu đã tồn tại
DROP PROCEDURE IF EXISTS createNewTreatmentSession//
CREATE PROCEDURE createNewTreatmentSession(
    IN patientID CHAR(10),
    IN note VARCHAR(1000),
    IN room INT,
    IN dentistID INT,
    IN assistantID INT,
    IN healthNote NVARCHAR(1000),
    IN description NVARCHAR(1000),
    IN categoryID INT
)
BEGIN
    DECLARE SessionID INT;

    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        RESIGNAL;
    END;

    START TRANSACTION;
    INSERT INTO Session(time, patientID, note, type, status, dentistID, assistantID, roomID)
    VALUES (NOW(), patientID, note, 'TRE', 'SCH', dentistID, assistantID, room);

    SET SessionID = LAST_INSERT_ID();
    INSERT INTO TreatmentSession(id, healthNote, description, categoryID) 
    VALUES (SessionID, healthNote, description, categoryID);
    COMMIT;
END//

-- Xóa thủ tục updateAccDetail nếu đã tồn tại
DROP PROCEDURE IF EXISTS updateAccDetail//
CREATE PROCEDURE updateAccDetail(
    IN username CHAR(10),
    IN oldPass CHAR(60),
    IN newPass CHAR(60)
)
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        RESIGNAL;
    END;

    START TRANSACTION;
    IF EXISTS (SELECT username FROM Account WHERE username = username AND password = oldPass) THEN
        UPDATE Account SET password = newPass WHERE username = username;
    END IF;
    COMMIT;
END//

-- Xóa thủ tục viewAcc nếu đã tồn tại
DROP PROCEDURE IF EXISTS viewAcc//
CREATE PROCEDURE viewAcc(IN personnelID INT)
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        RESIGNAL;
    END;

    START TRANSACTION;
    SELECT * FROM Account WHERE personnelID = personnelID;
    COMMIT;
END//

-- Xóa thủ tục viewCategories nếu đã tồn tại
DROP PROCEDURE IF EXISTS viewCategories//
CREATE PROCEDURE viewCategories()
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        RESIGNAL;
    END;

    START TRANSACTION;
    SELECT name FROM Category;
    COMMIT;
END//

-- Xóa thủ tục viewProcedures nếu đã tồn tại
DROP PROCEDURE IF EXISTS viewProcedures//
CREATE PROCEDURE viewProcedures()
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        RESIGNAL;
    END;

    START TRANSACTION;
    SELECT P.name, C.name AS categoryName, P.fee 
    FROM `Procedure` P 
    JOIN Category C ON P.categoryID = C.id;
    COMMIT;
END//

-- Xóa thủ tục createNewAppointment nếu đã tồn tại
DROP PROCEDURE IF EXISTS createNewAppointment//
CREATE PROCEDURE createNewAppointment(
    IN appointmentTime TIMESTAMP,
    IN note NVARCHAR(255),
    IN categoryName NVARCHAR(50),
    IN patientName NVARCHAR(50),
    IN patientPhone CHAR(10)
)
BEGIN
    DECLARE categoryID INT;

    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        RESIGNAL;
    END;

    START TRANSACTION;
    SELECT id INTO categoryID FROM Category WHERE name = categoryName;
    INSERT INTO AppointmentRequest(appointmentTime, note, categoryID, patientPhone, patientName) 
    VALUES (appointmentTime, note, categoryID, patientPhone, patientName);
    COMMIT;
END//

-- Xóa thủ tục updatePrescription nếu đã tồn tại
DROP PROCEDURE IF EXISTS updatePrescription//
CREATE PROCEDURE updatePrescription(
    IN patientID CHAR(10),
    IN prescription NVARCHAR(1000)
)
BEGIN
    DECLARE sessionID INT;

    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        RESIGNAL;
    END;

    START TRANSACTION;
    IF EXISTS (SELECT * FROM Session S WHERE S.patientID = patientID) THEN
        SELECT id INTO sessionID FROM Session WHERE patientID = patientID ORDER BY time DESC LIMIT 1;
        INSERT INTO Prescription(sessionID, prescription) 
        VALUES (sessionID, prescription);
    END IF;
    COMMIT;
END//

DELIMITER ;