USE DentalClinicDev;
GO

-- Truy vấn các bản ghi thanh toán của bệnh nhân với số điện thoại cụ thể
SELECT * 
FROM PaymentRecord pr
JOIN Patient p ON pr.patientID = p.id
WHERE p.phone = '0123567180';
GO

-- Truy vấn các yêu cầu hẹn trong ngày cụ thể (26/08/2023)
SELECT * 
FROM dbo.[AppointmentRequest]
WHERE appointmentTime >= '2023-08-26 00:00:00'
  AND appointmentTime < '2023-08-27 00:00:00';
GO

-- Truy vấn các yêu cầu hẹn trong cùng ngày (26/08/2023)
SELECT * 
FROM dbo.[AppointmentRequest]
WHERE DATEDIFF(day, appointmentTime, '2023-08-26') = 0;
GO

-- Truy vấn tất cả các phiên làm việc liên quan đến một bệnh nhân cụ thể
SELECT * 
FROM dbo.[Session]
WHERE patientID = 1;
GO

-- Truy vấn tất cả các bản ghi thanh toán liên quan đến một bệnh nhân cụ thể
SELECT * 
FROM dbo.[PaymentRecord]
WHERE patientID = 6969;
GO

-- Truy vấn tất cả các đơn thuốc liên quan đến một phiên điều trị cụ thể
SELECT * 
FROM dbo.[Prescription]
WHERE treatmentSessionID = 500;
GO

-- Làm sạch bộ nhớ đệm của SQL Server để đảm bảo rằng các truy vấn không bị ảnh hưởng bởi bộ nhớ đệm
DBCC DROPCLEANBUFFERS;
GO
