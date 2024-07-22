import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminHome from '../pages/Home';
import Admin from '../pages/account-management/Admin';
import Employee from '../pages/account-management/Employee';
import Dentist from '../pages/account-management/Dentist';
import Customer from '../pages/account-management/Customer';

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
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
};

export default AppRoutesAdmin;
