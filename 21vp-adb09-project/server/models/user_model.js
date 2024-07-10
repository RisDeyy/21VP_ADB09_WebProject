const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
    UserID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    Fullname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Gender: {
        type: DataTypes.CHAR,
        validate: {
            isIn: [['1', '0']]
        }
    },
    DOB: {
        type: DataTypes.DATE,
        allowNull: false
    },
    Password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Role: {
        type: DataTypes.STRING,
        validate: {
            isIn: [['Admin', 'Employee', 'Dentist', 'Customer']]
        }
    }
}, {
    timestamps: false
});

module.exports = User;
