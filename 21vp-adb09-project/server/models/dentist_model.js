const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./user_model');

const Dentist = sequelize.define('Dentist', {
    UserID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: User,
            key: 'UserID'
        }
    },
    Certificate: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Degree: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    WorkPlace: {
        type: DataTypes.STRING,
        allowNull: false
    },
    PhoneNumber: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            is: /^[0-9]{10}$/
        }
    }
}, {
    timestamps: false
});

Dentist.belongsTo(User, { foreignKey: 'UserID' });

module.exports = Dentist;
