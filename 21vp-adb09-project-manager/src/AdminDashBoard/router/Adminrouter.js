import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminHome from '../pages/Home';
import Admin from '../pages/account-management/Admin';
import Employee from '../pages/account-management/Employee';
import Dentist from '../pages/account-management/Dentist';
import Customer from '../pages/account-management/Customer';
import Revenue from '../pages/revenue-statistics/Revenue';
import NumberOfAppointments from '../pages/revenue-statistics/NumberOfAppointments';
import NumberOfCustomes from '../pages/revenue-statistics/NumberOfCustomers';

const AppRoutesAdmin = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminHome />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/account-management" element={<Admin/>} />
        <Route path="/admin/account-management" element={<Admin/>} />
        <Route path="/admin/account-management/admin-account" element={<Admin/>} />
        <Route path="/admin/account-management/employee-account" element={<Employee/>} />
        <Route path="/admin/account-management/dentist-account" element={<Dentist/>} />
        <Route path="/admin/account-management/customer-account" element={<Customer/>} />
        <Route path="/revenue-statistics" element={<Revenue/>} />
        <Route path="/admin/revenue-statistics" element={<Revenue/>} />
        <Route path="/admin/revenue-statistics/by-revenue" element={<Revenue/>} />
        <Route path="/admin/revenue-statistics/by-number-of-customers" element={<NumberOfCustomes/>} />
        <Route path="/admin/revenue-statistics/by-number-of-appointments" element={<NumberOfAppointments/>} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
};

export default AppRoutesAdmin;
