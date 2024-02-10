import React from 'react';
import FilteredList from '../FilteredList';

const Learn = () => {
  const data = [
    /*
    {
      name: '',
      type: '',
      symptoms: ['',''],
      description: '',
    },
    */
    {
      id: 0,
      name: 'Illness 1',
      type: 'Respitory',
      symptoms: ['congestion','fever'],
      description: 'This ...',
    },
    {
      id: 1,
      name: 'Illness 2',
      type: 'Sexually Transmitted Disease',
      symptoms: ['congestion','skin irritation'],
      description: 'This ...',
    },
  ];

  return (
    <div>
      <h1>Common Illnesses</h1>
      <p>Click on an illness for more information!</p>
      <FilteredList items={data} />
    </div>
  )
};

export default Learn;