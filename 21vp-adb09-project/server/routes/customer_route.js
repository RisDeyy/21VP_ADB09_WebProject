const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customer_controller');

router.get('/customers', customerController.getAllCustomers);
router.get('/customers/:id', customerController.getCustomerById);
router.post('/customers', customerController.createCustomer);
router.put('/customers/:id', customerController.updateCustomer);
router.delete('/customers/:id', customerController.deleteCustomer);
router.get('/customers/:id/appointments', customerController.getAppointmentsByCustomer);

module.exports = router;
