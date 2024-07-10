const Dentist = require('../models/dentist_model');
const User = require('../models/user_model');
const Schedule = require('../models/schedule_model');
const Appointment = require('../models/appointment_model');

exports.getDentistById = async (req, res) => {
    try {
        const dentist = await Dentist.findByPk(req.params.id, {
            include: [{ model: User }, { model: Schedule }]
        });
        if (dentist) {
            res.json(dentist);
        } else {
            res.status(404).json({ error: 'Dentist not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllDentists = async (req, res) => {
    try {
        const dentists = await Dentist.findAll({
            include: [{ model: User }, { model: Schedule }]
        });
        res.json(dentists);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createDentist = async (req, res) => {
    try {
        const { User, Certificate, Degree, Description, WorkPlace, PhoneNumber } = req.body;
        const newUser = await User.create(User);
        const dentist = await Dentist.create({
            UserID: newUser.UserID,
            Certificate,
            Degree,
            Description,
            WorkPlace,
            PhoneNumber
        });
        res.status(201).json(dentist);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateDentist = async (req, res) => {
    try {
        const dentist = await Dentist.findByPk(req.params.id);
        if (dentist) {
            await dentist.update(req.body);
            res.json(dentist);
        } else {
            res.status(404).json({ error: 'Dentist not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteDentist = async (req, res) => {
    try {
        const dentist = await Dentist.findByPk(req.params.id);
        if (dentist) {
            await dentist.destroy();
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Dentist not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAppointmentsByDentist = async (req, res) => {
    try {
        const appointments = await Appointment.findAll({
            include: [{ model: Schedule, where: { DentistID: req.params.id } }, { model: Customer }]
        });
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
