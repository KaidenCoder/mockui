import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { GlobalContext } from '../../../context';

const PatientAttentionDetails = () => {
  const { patients } = useContext(GlobalContext);
  return (
    <div>
      <h2>
        {patients.icon} {patients.header}
      </h2>
      <h3>
        {patients.number} {patients.header}
      </h3>
      {patients.data.map((d, idx) => (
        <Card key={idx} className="m-2 p-2">
          <Card.Title>
            {d.icon} {d.name}
          </Card.Title>
          <p>{d.attention}</p>
          <p>{d.adjustment}</p>
          <Card.Body>
            {d.date} {d.text} <Button warning>Review</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default PatientAttentionDetails;
