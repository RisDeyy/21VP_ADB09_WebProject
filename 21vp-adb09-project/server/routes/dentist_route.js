const express = require('express');
const router = express.Router();
const dentistController = require('../controllers/dentist_controller');

router.get('/dentists', dentistController.getAllDentists);
router.get('/dentists/:id', dentistController.getDentistById);
router.post('/dentists', dentistController.createDentist);
router.put('/dentists/:id', dentistController.updateDentist);
router.delete('/dentists/:id', dentistController.deleteDentist);
router.get('/dentists/:id/appointments', dentistController.getAppointmentsByDentist);
module.exports = router;
