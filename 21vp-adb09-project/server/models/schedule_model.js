const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Schedule = sequelize.define('Schedule', {
    ScheduleID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    DentistID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Dentist',
            key: 'UserID'
        }
    },
    Date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    StartTime: {
        type: DataTypes.TIME,
        allowNull: false
    },
    EndTime: {
        type: DataTypes.TIME,
        allowNull: false
    }
});

module.exports = Schedule;
