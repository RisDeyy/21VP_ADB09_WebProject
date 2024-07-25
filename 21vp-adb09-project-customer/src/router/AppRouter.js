import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Booking from '../pages/Booking';
import Blog from '../pages/Blog';
import About from '../pages/About';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import UserAccount from '../pages/UserAccount';
import ChooseAppointment from '../pages/ChooseAppointment';
import { AppointmentProvider } from '../contexts/AppointmentContext';
import Confirm from '../pages/Confirm';

const AppRouter = () => {
  return (
    <AppointmentProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking/choose-appointment" element={<ChooseAppointment />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/user-account" element={<UserAccount />} />
          <Route path="/booking/choose-appointment/confirm-appointment" element={<Confirm />} />
        </Routes>
      </Router>
    </AppointmentProvider>
  );
};

export default AppRouter;
