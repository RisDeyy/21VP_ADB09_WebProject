import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Booking from '../pages/Booking';
import Blog from '../pages/Blog';
import About from '../pages/About';
import ChooseAppointment from '../pages/ChooseAppointment';
import { AppointmentProvider } from '../contexts/AppointmentContext';

const AppRouter = () => {
  return (
    <AppointmentProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking/choose-appointment" element={<ChooseAppointment />} />
        </Routes>
      </Router>
    </AppointmentProvider>
  );
};

export default AppRouter;
