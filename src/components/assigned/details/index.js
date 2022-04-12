import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { DUE, UPCOMING } from '../../../constants/text';
import { GlobalContext } from '../../../context';

const AsignedTaskDetails = () => {
  const { assignedTasks } = useContext(GlobalContext);
  return (
    <div>
      <h2>
        {assignedTasks.icon} {assignedTasks.header}
      </h2>
      <h3>
        {DUE} {assignedTasks.due}
      </h3>
      {assignedTasks.dueData.map((d, idx) => (
        <Card key={idx} className="m-2 p-2">
          <Card.Title>
            {d.icon} {d.name}
          </Card.Title>
          <p>{d.type}</p>
          <p>{d.doctor}</p>
          <Card.Body>
            {d.date} {d.text} <Button warning>Review</Button>
          </Card.Body>
        </Card>
      ))}
      <h3>
        {UPCOMING} {assignedTasks.upcoming}
      </h3>
      {assignedTasks.upcomingData.map((d, idx) => (
        <Card key={idx} className="m-2 p-2">
          <Card.Title>
            {d.icon} {d.name}
          </Card.Title>
          <p>{d.type}</p>
          <p>{d.doctor}</p>
          <Card.Body>
            {d.date} {d.text} <Button warning>Review</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default AsignedTaskDetails;
