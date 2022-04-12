import React, { useContext } from 'react';
import AssignedTaskDetails from '../../components/assigned/details';
import PatientAttentionDetails from '../../components/patients/details';
import { ASSIGNED_TASKS, PATIENT_ATTENTION } from '../../constants/text';
import { GlobalContext } from '../../context';

const SwitchComponent = () => {
  const { types } = useContext(GlobalContext);
  switch (types) {
    case PATIENT_ATTENTION:
      return <PatientAttentionDetails />;
    case ASSIGNED_TASKS:
      return <AssignedTaskDetails />;
    default:
      return <PatientAttentionDetails />;
  }
};

export default SwitchComponent;
