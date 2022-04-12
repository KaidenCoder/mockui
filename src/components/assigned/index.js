import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { ASSIGNED_TASKS } from '../../constants/text';
import { GlobalContext } from '../../context';

const Assigned = () => {
  const { assignedTasks, handleComponentType } = useContext(GlobalContext);
  return (
    <div>
      <Card className="m-1" onClick={() => handleComponentType(ASSIGNED_TASKS)}>
        <Card.Body>
          {assignedTasks.icon} {assignedTasks.header}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Assigned;
