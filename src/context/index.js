import React, { createContext, useState } from 'react';
import { data } from '../config';

export const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
  const { patient, assigned } = data;
  const [patients, setPatient] = useState(patient);
  const [conversation, setConversation] = useState([]);
  const [assignedTasks, setAssignedTasks] = useState(assigned);
  const [types, setTypes] = useState('');

  const handleComponentType = (data) => {
    setTypes(data);
  };

  return (
    <GlobalContext.Provider
      value={{ patients, assignedTasks, types, handleComponentType }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
