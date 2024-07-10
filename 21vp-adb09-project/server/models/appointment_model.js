const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Appointment = sequelize.define('Appointment', {
    AppointmentID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    ScheduleID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Schedule',
            key: 'ScheduleID'
        }
    },
    CustomerID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Customer',
            key: 'UserID'
        }
    },
    Status: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Appointment;
