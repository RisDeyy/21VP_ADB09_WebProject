const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const cors = require('cors');
const dentistRoutes = require('./routes/dentist_route');
const customerRoutes = require('./routes/customer_route');
const scheduleRoutes = require('./routes/schedule_route');
const appointmentRoutes = require('./routes/appointment_route');
const app = express();
app.use(bodyParser.json());

app.use(cors());

app.use('/api', dentistRoutes);
app.use('/api', customerRoutes);
app.use('/api', scheduleRoutes);
app.use('/api', appointmentRoutes);

const PORT = 5000;

sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
