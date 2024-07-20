import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminHome from '../pages/Home';

const AppRoutesAdmin = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminHome />} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
};

export default AppRoutesAdmin;
