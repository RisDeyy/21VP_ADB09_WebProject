USE DentalClinicDev;
GO

BEGIN TRY
    BEGIN TRANSACTION;

    -- First, create filegroups to store rows based on the `appointmentTime` column within the specified ranges
    ALTER DATABASE DentalClinicDev
    ADD FILEGROUP AppointmentRequest_lt_2019,
    ADD FILEGROUP AppointmentRequest_2019,
    ADD FILEGROUP AppointmentRequest_2019_2020,
    ADD FILEGROUP AppointmentRequest_2020_2021,
    ADD FILEGROUP AppointmentRequest_2021_2022,
    ADD FILEGROUP AppointmentRequest_2022_2023,
    ADD FILEGROUP AppointmentRequest_gt_2023_2024,
    ADD FILEGROUP AppointmentRequest_lt_2024;

    -- Add files to the filegroups
    ALTER DATABASE DentalClinicDev    
    ADD FILE (
        NAME = N'AppointmentRequest_lt_2019',
        FILENAME = N'C:\sql_partition\AppointmentRequest_lt_2019.ndf',
        SIZE = 10MB, 
        MAXSIZE = UNLIMITED, 
        FILEGROWTH = 1024KB
    ) TO FILEGROUP AppointmentRequest_lt_2019;

    ALTER DATABASE DentalClinicDev    
    ADD FILE (
        NAME = N'AppointmentRequest_2019_2020',
        FILENAME = N'C:\sql_partition\AppointmentRequest_2019_2020.ndf',
        SIZE = 10MB, 
        MAXSIZE = UNLIMITED, 
        FILEGROWTH = 1024KB
    ) TO FILEGROUP AppointmentRequest_2019_2020;

    ALTER DATABASE DentalClinicDev    
    ADD FILE (
        NAME = N'AppointmentRequest_2020_2021',
        FILENAME = N'C:\sql_partition\AppointmentRequest_2020_2021.ndf',
        SIZE = 10MB, 
        MAXSIZE = UNLIMITED, 
        FILEGROWTH = 1024KB
    ) TO FILEGROUP AppointmentRequest_2020_2021;

    ALTER DATABASE DentalClinicDev    
    ADD FILE (
        NAME = N'AppointmentRequest_2021_2022',
        FILENAME = N'C:\sql_partition\AppointmentRequest_2021_2022.ndf',
        SIZE = 10MB, 
        MAXSIZE = UNLIMITED, 
        FILEGROWTH = 1024KB
    ) TO FILEGROUP AppointmentRequest_2021_2022;

    ALTER DATABASE DentalClinicDev    
    ADD FILE (
        NAME = N'AppointmentRequest_2022_2023',
        FILENAME = N'C:\sql_partition\AppointmentRequest_2022_2023.ndf',
        SIZE = 10MB, 
        MAXSIZE = UNLIMITED, 
        FILEGROWTH = 1024KB
    ) TO FILEGROUP AppointmentRequest_2022_2023;

    ALTER DATABASE DentalClinicDev    
    ADD FILE (
        NAME = N'AppointmentRequest_2023_2024',
        FILENAME = N'C:\sql_partition\AppointmentRequest_2023_2024.ndf',
        SIZE = 10MB, 
        MAXSIZE = UNLIMITED, 
        FILEGROWTH = 1024KB
    ) TO FILEGROUP AppointmentRequest_2023_2024;

    ALTER DATABASE DentalClinicDev    
    ADD FILE (
        NAME = N'AppointmentRequest_gt_2024',
        FILENAME = N'C:\sql_partition\AppointmentRequest_gt_2024.ndf',
        SIZE = 10MB, 
        MAXSIZE = UNLIMITED, 
        FILEGROWTH = 1024KB
    ) TO FILEGROUP AppointmentRequest_gt_2024;

    -- Create a partition function
    CREATE PARTITION FUNCTION AppointmentRequest_by_year_function(datetime2)
    AS RANGE RIGHT 
    FOR VALUES ('2018-01-01', '2019-01-01', '2020-01-01', '2021-01-01', '2022-01-01', '2023-01-01');

    -- Create a partition scheme
    CREATE PARTITION SCHEME AppointmentRequest_by_year_scheme
    AS PARTITION AppointmentRequest_by_year_function
    TO (
        AppointmentRequest_lt_2019,
        AppointmentRequest_2019,
        AppointmentRequest_2019_2020,
        AppointmentRequest_2020_2021,
        AppointmentRequest_2021_2022,
        AppointmentRequest_2022_2023,
        AppointmentRequest_gt_2023_2024,
        AppointmentRequest_lt_2024
    );

    -- Uncomment the following lines to create a nonclustered index on the partitioned table
    -- CREATE NONCLUSTERED INDEX idx_AppointmentRequest_time
    -- ON dbo.AppointmentRequest
    -- (
    --     [appointmentTime]
    -- ) ON [AppointmentRequest_by_year_scheme]([appointmentTime]);

    COMMIT TRANSACTION;
END TRY
BEGIN CATCH
    PRINT ERROR_MESSAGE();
    ROLLBACK TRANSACTION;
END CATCH;
