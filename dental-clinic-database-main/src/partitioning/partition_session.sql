USE DentalClinicDev;
GO

BEGIN TRY
    BEGIN TRANSACTION;

    -- Thêm các nhóm tệp để lưu trữ dữ liệu theo khoảng thời gian
    ALTER DATABASE DentalClinicDev
    ADD FILEGROUP Session_lt_2019,
        FILEGROUP Session_2019,
        FILEGROUP Session_2019_2020,
        FILEGROUP Session_2020_2021,
        FILEGROUP Session_2021_2022,
        FILEGROUP Session_2022_2023,
        FILEGROUP Session_gt_2023_2024,
        FILEGROUP Session_lt_2024;
    
    -- Thêm các tệp vào các nhóm tệp tương ứng
    ALTER DATABASE DentalClinicDev    
    ADD FILE (
        NAME = N'Session_lt_2019',
        FILENAME = N'C:\sql_partition\Session_lt_2019.ndf',
        SIZE = 10MB, 
        MAXSIZE = UNLIMITED, 
        FILEGROWTH = 1024KB
    ) TO FILEGROUP Session_lt_2019;

    ALTER DATABASE DentalClinicDev    
    ADD FILE (
        NAME = N'Session_2019',
        FILENAME = N'C:\sql_partition\Session_2019.ndf',
        SIZE = 10MB, 
        MAXSIZE = UNLIMITED, 
        FILEGROWTH = 1024KB
    ) TO FILEGROUP Session_2019;

    ALTER DATABASE DentalClinicDev    
    ADD FILE (
        NAME = N'Session_2019_2020',
        FILENAME = N'C:\sql_partition\Session_2019_2020.ndf',
        SIZE = 10MB, 
        MAXSIZE = UNLIMITED, 
        FILEGROWTH = 1024KB
    ) TO FILEGROUP Session_2019_2020;

    ALTER DATABASE DentalClinicDev    
    ADD FILE (
        NAME = N'Session_2020_2021',
        FILENAME = N'C:\sql_partition\Session_2020_2021.ndf',
        SIZE = 10MB, 
        MAXSIZE = UNLIMITED, 
        FILEGROWTH = 1024KB
    ) TO FILEGROUP Session_2020_2021;

    ALTER DATABASE DentalClinicDev    
    ADD FILE (
        NAME = N'Session_2021_2022',
        FILENAME = N'C:\sql_partition\Session_2021_2022.ndf',
        SIZE = 10MB, 
        MAXSIZE = UNLIMITED, 
        FILEGROWTH = 1024KB
    ) TO FILEGROUP Session_2021_2022;

    ALTER DATABASE DentalClinicDev    
    ADD FILE (
        NAME = N'Session_2022_2023',
        FILENAME = N'C:\sql_partition\Session_2022_2023.ndf',
        SIZE = 10MB, 
        MAXSIZE = UNLIMITED, 
        FILEGROWTH = 1024KB
    ) TO FILEGROUP Session_2022_2023;

    ALTER DATABASE DentalClinicDev    
    ADD FILE (
        NAME = N'Session_gt_2023_2024',
        FILENAME = N'C:\sql_partition\Session_gt_2023_2024.ndf',
        SIZE = 10MB, 
        MAXSIZE = UNLIMITED, 
        FILEGROWTH = 1024KB
    ) TO FILEGROUP Session_gt_2023_2024;

    ALTER DATABASE DentalClinicDev    
    ADD FILE (
        NAME = N'Session_lt_2024',
        FILENAME = N'C:\sql_partition\Session_lt_2024.ndf',
        SIZE = 10MB, 
        MAXSIZE = UNLIMITED, 
        FILEGROWTH = 1024KB
    ) TO FILEGROUP Session_lt_2024;

    -- Tạo hàm phân vùng dựa trên cột `time`
    CREATE PARTITION FUNCTION Session_by_year_function(datetime2)
    AS RANGE RIGHT 
    FOR VALUES (
        '2019-01-01', 
        '2020-01-01', 
        '2021-01-01', 
        '2022-01-01', 
        '2023-01-01', 
        '2024-01-01'
    );

    -- Tạo sơ đồ phân vùng tương ứng với hàm phân vùng
    CREATE PARTITION SCHEME Session_by_year_scheme
    AS PARTITION Session_by_year_function
    TO (
        Session_lt_2019,
        Session_2019,
        Session_2019_2020,
        Session_2020_2021,
        Session_2021_2022,
        Session_2022_2023,
        Session_gt_2023_2024,
        Session_lt_2024
    );

    -- Tạo chỉ mục không cụm trên cột `time` của bảng `Session` sử dụng sơ đồ phân vùng
    -- Uncomment các dòng dưới đây nếu bạn muốn tạo chỉ mục
    /*
    CREATE NONCLUSTERED INDEX idx_Session_time
    ON dbo.Session ([time])
    ON Session_by_year_scheme ([time]);
    */

    COMMIT TRANSACTION;
END TRY
BEGIN CATCH
    -- Hiển thị thông báo lỗi chi tiết
    PRINT ERROR_MESSAGE();
    ROLLBACK TRANSACTION;
END CATCH;
