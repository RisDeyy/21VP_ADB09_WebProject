import express from 'express';
import dentistRoute from '../src/routes/api/dentist.route';
import staffRoute from '../src/routes/api/staff.route';
// API routes (/api/...)
const router = express.Router();

router.use('/dentists', dentistRoute);
router.use('/staff',staffRoute)

export default router;