import { Clipboard, Filter, Plus, Warning } from '../constants/images';

export const data = {
  patient: {
    number: 2,
    header: 'Immediate attention',
    icon: <Plus />,
    data: [
      {
        name: 'Wellington Stiedman',
        attention: 'Low BG',
        adjustment: 'Paused adjustments',
        icon: <Filter />,
        date: '10 Feb 2022',
        text: 'The insulin adjustment Program paused automatically, holding basal dose at 35 units. Blood...',
      },
      {
        name: 'Roshni Reddy',
        attention: 'Low BG, High BG',
        adjustment: 'No adjustments',
        icon: <Warning />,
        date: '21 Feb 2022',
        text: 'Blood glucose levels have been out of range 20 times in 2 weeks. Please review the bllod glucose and ...',
      },
    ],
  },
  conversations: [],
  assigned: {
    due: 1,
    upcoming: 2,
    header: 'Assigned Tasks',
    icon: <Clipboard />,
    dueData: [
      {
        name: 'Adiditi Musunur',
        icon: <Clipboard />,
        type: 'Assigned task',
        doctor: 'Peter Huang',
        data: 'Due 15 Nov 2021',
        text: 'Tracy Garcia MD (31 Nov 2021): Aditi had concerns about her bolus titration. Please check in with her...',
      },
    ],
    upcomingData: [
      {
        name: 'Cuff program',
        icon: <Clipboard />,
        type: 'Assigned task',
        doctor: 'Care team',
        data: 'Due 17 Nov 2021',
        text: 'Blood glucose levels have been out of range 20 times in 2 weeks. Please review the bllod glucose and ...',
      },
    ],
  },
};
