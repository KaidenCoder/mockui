import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { PATIENT_ATTENTION } from '../../constants/text';
import { GlobalContext } from '../../context';

const Patient = () => {
  const { patients, handleComponentType } = useContext(GlobalContext);
  return (
    <div>
      <Card
        className="m-1"
        onClick={() => handleComponentType(PATIENT_ATTENTION)}
      >
        <Card.Body>
          {patients.icon} {patients.number} {patients.header}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Patient;
