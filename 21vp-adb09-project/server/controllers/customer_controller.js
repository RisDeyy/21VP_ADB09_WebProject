const Customer = require('../models/customer_model');
const User = require('../models/user_model');

exports.getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.findAll({ include: User });
        res.json(customers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getCustomerById = async (req, res) => {
    try {
        const customer = await Customer.findByPk(req.params.id, { include: User });
        if (!customer) {
            return res.status(404).json({ error: 'Customer not found' });
        }
        res.json(customer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createCustomer = async (req, res) => {
    try {
        const user = await User.create({ ...req.body, Role: 'Customer' });
        const customer = await Customer.create({ ...req.body, UserID: user.UserID });
        res.status(201).json(customer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateCustomer = async (req, res) => {
    try {
        const customer = await Customer.findByPk(req.params.id);
        if (!customer) {
            return res.status(404).json({ error: 'Customer not found' });
        }
        await User.update(req.body, { where: { UserID: customer.UserID } });
        await customer.update(req.body);
        res.json(customer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteCustomer = async (req, res) => {
    try {
        const customer = await Customer.findByPk(req.params.id);
        if (!customer) {
            return res.status(404).json({ error: 'Customer not found' });
        }
        await User.destroy({ where: { UserID: customer.UserID } });
        await customer.destroy();
        res.json({ message: 'Customer deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
