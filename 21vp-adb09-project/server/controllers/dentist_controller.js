const Dentist = require('../models/dentist_model');
const User = require('../models/user_model');

exports.getAllDentists = async (req, res) => {
    try {
        const dentists = await Dentist.findAll({ include: User });
        res.json(dentists);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getDentistById = async (req, res) => {
    try {
        const dentist = await Dentist.findByPk(req.params.id, { include: User });
        if (!dentist) {
            return res.status(404).json({ error: 'Dentist not found' });
        }
        res.json(dentist);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createDentist = async (req, res) => {
    try {
        const user = await User.create({ ...req.body, Role: 'Dentist' });
        const dentist = await Dentist.create({ ...req.body, UserID: user.UserID });
        res.status(201).json(dentist);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateDentist = async (req, res) => {
    try {
        const dentist = await Dentist.findByPk(req.params.id);
        if (!dentist) {
            return res.status(404).json({ error: 'Dentist not found' });
        }
        await User.update(req.body, { where: { UserID: dentist.UserID } });
        await dentist.update(req.body);
        res.json(dentist);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteDentist = async (req, res) => {
    try {
        const dentist = await Dentist.findByPk(req.params.id);
        if (!dentist) {
            return res.status(404).json({ error: 'Dentist not found' });
        }
        await User.destroy({ where: { UserID: dentist.UserID } });
        await dentist.destroy();
        res.json({ message: 'Dentist deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
