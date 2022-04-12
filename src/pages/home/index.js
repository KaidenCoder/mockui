import React from 'react';
import Assigned from '../../components/assigned';
import Patient from '../../components/patients';
import { PRIORITIZE, TASKS } from '../../constants/text';
import SwitchComponent from '../../features/switchComponent';

const Home = () => {
  return (
    <div className="d-flex">
      <div className="first-column">
        <h3>{TASKS}</h3>
        <h4>{PRIORITIZE}</h4>
        <Patient />
        <Assigned />
      </div>
      <div className="second-column">
        <SwitchComponent />
      </div>
    </div>
  );
};

export default Home;
