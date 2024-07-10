const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./user_model');

const Customer = sequelize.define('Customer', {
    UserID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: User,
            key: 'UserID'
        }
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

Customer.belongsTo(User, { foreignKey: 'UserID' });

module.exports = Customer;
