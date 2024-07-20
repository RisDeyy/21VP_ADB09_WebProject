import React, { createContext, useState } from 'react';

export const AppointmentContext = createContext();

export const AppointmentProvider = ({ children }) => {
  const [appointmentData, setAppointmentData] = useState(null);

  return (
    <AppointmentContext.Provider value={{ appointmentData, setAppointmentData }}>
      {children}
    </AppointmentContext.Provider>
  );
};
