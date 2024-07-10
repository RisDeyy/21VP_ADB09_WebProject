const Customer = require('../models/customer_model');
const User = require('../models/user_model');
const Schedule = require('../models/schedule_model');
const Appointment = require('../models/appointment_model');


exports.getCustomerById = async (req, res) => {
    try {
        const customer = await Customer.findByPk(req.params.id, {
            include: [{ model: User }, { model: Appointment }]
        });
        if (customer) {
            res.json(customer);
        } else {
            res.status(404).json({ error: 'Customer not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.findAll({
            include: [{ model: User }, { model: Appointment }]
        });
        res.json(customers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createCustomer = async (req, res) => {
    try {
        const { User, PhoneNumber } = req.body;
        const newUser = await User.create(User);
        const customer = await Customer.create({
            UserID: newUser.UserID,
            PhoneNumber
        });
        res.status(201).json(customer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateCustomer = async (req, res) => {
    try {
        const customer = await Customer.findByPk(req.params.id);
        if (customer) {
            await customer.update(req.body);
            res.json(customer);
        } else {
            res.status(404).json({ error: 'Customer not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteCustomer = async (req, res) => {
    try {
        const customer = await Customer.findByPk(req.params.id);
        if (customer) {
            await customer.destroy();
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Customer not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAppointmentsByCustomer = async (req, res) => {
    try {
        const appointments = await Appointment.findAll({
            where: { CustomerID: req.params.id },
            include: [{ model: Schedule }, { model: Dentist }]
        });
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
