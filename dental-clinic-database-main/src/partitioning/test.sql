USE DentalClinicDev;
GO

-- Kiểm tra số lượng hàng trong từng phân vùng
SELECT 
    p.partition_number AS partition_number,
    f.name AS file_group, 
    p.rows AS row_count
FROM sys.partitions p
JOIN sys.destination_data_spaces dds ON p.partition_number = dds.destination_id
JOIN sys.filegroups f ON dds.data_space_id = f.data_space_id
WHERE OBJECT_NAME(OBJECT_ID) = 'Session'
ORDER BY partition_number;
GO

-- Xác nhận các Filegroups
SELECT name AS [File Group Name]
FROM sys.filegroups
WHERE type = 'FG';
GO

-- Xác nhận các Datafiles
SELECT 
    name AS [DB File Name], 
    physical_name AS [DB File Path] 
FROM sys.database_files
WHERE type_desc = 'ROWS';
GO

-- Truy vấn dữ liệu từ một phân vùng cụ thể (phân vùng 1)
SELECT *
FROM dbo.Session
WHERE $PARTITION.Session_by_year_function(time) = 1;
GO

-- Truy vấn dữ liệu từ một phân vùng cụ thể (phân vùng 6)
SELECT *
FROM dbo.Session
WHERE $PARTITION.Session_by_year_function(time) = 6;
GO

-- Lấy số phân vùng của một ngày cụ thể
SELECT $PARTITION.Session_by_year_function('2024-01-01') AS [Partition Number];
GO

-- Truy vấn dữ liệu từ phân vùng chứa dữ liệu năm 2021
SELECT *
FROM dbo.Session
WHERE time >= '2021-01-01 00:00:00' 
  AND time < '2022-01-01 00:00:00';
GO
