USE DentalClinicDev;
GO

-- Update admin password for login, set password to '123456'
UPDATE Account
SET password = '$2a$12$c0bY.IqcxKRZEMlWPVGg4OH/x9Tw2owCba74mFiyTrrp9Vxl4.UXy'
WHERE username = 'ADM-123456';

-- CREATE ROLES
CREATE ROLE DB_ADMIN;
CREATE ROLE PATIENT;
CREATE ROLE STAFF;
CREATE ROLE DENTIST;

-- CREATE LOGIN ACCOUNTS
CREATE LOGIN MAN WITH PASSWORD = '123';
CREATE LOGIN HIEU WITH PASSWORD = '123';
CREATE LOGIN NAM WITH PASSWORD = '123';
CREATE LOGIN TRUNG WITH PASSWORD = '123';

-- EXECUTE ADDING ACCOUNTS TO ROLES
EXEC sp_addrolemember 'STAFF', 'Khiem';
EXEC sp_addrolemember 'DB_ADMIN', 'Luc';
EXEC sp_addrolemember 'PATIENT', 'Phung';
EXEC sp_addrolemember 'DENTIST', 'Khanh';

-- ADD accessAdmin TO ROLE DB_ADMIN
ALTER ROLE db_accessadmin ADD MEMBER HIEU;
GO

-- GRANT VIEW TO PATIENT
CREATE VIEW VIEW_PATIENT_INFO AS
SELECT *
FROM [dbo].[Patient]
JOIN [dbo].[PaymentRecord] ON [dbo].[Patient].[id] = [dbo].[PaymentRecord].[patientID]
WHERE [dbo].[Patient].[id] = @PATIENT_ID;
GO

-- GRANT VIEW TO DENTIST
CREATE VIEW VIEW_DENTIST_INFO AS
SELECT *
FROM [dbo].[Personnel]
WHERE [dbo].[Dentist].[id] = @DENTIST_ID;
GO

CREATE VIEW VIEW_SESSION_INFO AS
SELECT *
FROM [dbo].[Session]
JOIN [dbo].[TreatmentSession] ON [dbo].[Session].[id] = [dbo].[TreatmentSession].[id]
JOIN [dbo].[PersonnelSession] ON [dbo].[PersonnelSession].[sessionID] = [dbo].[Session].[id]
WHERE [dbo].[PersonnelSession].[dentistID] = @DENTIST_ID;
GO

-- GRANT PRIVILEGES TO STAFF
GRANT UPDATE ON [dbo].[Account](password) TO STAFF;
GRANT SELECT ON [dbo].[Account] TO STAFF;
GRANT ALL ON [dbo].[Personnel] TO STAFF;
GRANT ALL ON [dbo].[AppointmentRequest] TO STAFF;
GRANT SELECT, UPDATE, INSERT ON [dbo].[Drug] TO STAFF;
GRANT SELECT, UPDATE, INSERT ON [dbo].[Day] TO STAFF;
GRANT SELECT, UPDATE, INSERT ON [dbo].[Schedule] TO STAFF;
GRANT SELECT, UPDATE, INSERT ON [dbo].[Room] TO STAFF;
GRANT SELECT, UPDATE, INSERT ON [dbo].[Procedure] TO STAFF;
GRANT SELECT, UPDATE, INSERT ON [dbo].[Category] TO STAFF;
GRANT SELECT, UPDATE, INSERT ON [dbo].[Session] TO STAFF;
GRANT SELECT, UPDATE, INSERT ON [dbo].[TreatmentSession] TO STAFF;
GRANT SELECT, UPDATE, INSERT ON [dbo].[Tooth] TO STAFF;
GRANT SELECT, UPDATE, INSERT ON [dbo].[ToothSession] TO STAFF;
GRANT SELECT, UPDATE, INSERT ON [dbo].[ExaminationSession] TO STAFF;
GRANT SELECT, UPDATE, INSERT ON [dbo].[ReExaminationSession] TO STAFF;
GRANT SELECT, UPDATE, INSERT ON [dbo].[Patient] TO STAFF;
GRANT ALL PRIVILEGES ON [dbo].[PaymentRecord] TO STAFF;

-- GRANT PRIVILEGES TO DENTIST
GRANT UPDATE ON [dbo].[Drug](description) TO DENTIST;
GRANT SELECT ON [dbo].[Drug] TO DENTIST;
GRANT UPDATE ON [dbo].[TreatmentSession](description) TO DENTIST;
GRANT UPDATE ON [dbo].[TreatmentSession](healthNote) TO DENTIST;
GRANT SELECT ON [dbo].[TreatmentSession] TO DENTIST;
GRANT UPDATE ON [dbo].[Session](note) TO DENTIST;
GRANT SELECT ON [dbo].[Session] TO DENTIST;
GRANT UPDATE ON [dbo].[Account](password) TO DENTIST;
GRANT UPDATE ON [dbo].[Account](username) TO DENTIST;
GRANT ALL PRIVILEGES ON VIEW_DENTIST_INFO TO DENTIST;
GRANT ALL PRIVILEGES ON VIEW_SESSION_INFO TO DENTIST;

-- GRANT PRIVILEGES TO PATIENT
GRANT UPDATE ON [dbo].[Account](password) TO PATIENT;
GRANT UPDATE ON [dbo].[Account](username) TO PATIENT;
GRANT INSERT ON [dbo].[AppointmentRequest] TO PATIENT;
GRANT ALL PRIVILEGES ON VIEW_PATIENT_INFO TO PATIENT;
