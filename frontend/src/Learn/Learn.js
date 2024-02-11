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
      type: ['Respitory', 'Virus'],
      symptoms: ['Congestion','Fever'],
      description: 'This ...',
    },
    {
      id: 1,
      name: 'Illness 2',
      type: ['Sexually Transmitted Disease', 'Virus'],
      symptoms: ['Congestion','Skin Irritation'],
      description: 'This ...',
    },
  ];

  return (
    <div>
      <h1>Common Illnesses</h1>
      <h2>This is not a complete list. If your are experiencing symptoms, please SEE A MEDICAL PROFESSIONAL for more information!</h2>
      <h2>See our Nearby Help page to find medical professionals near you :)</h2>
      <p>Click on an illness for more information!</p>
      <FilteredList items={data} />
    </div>
  )
};

export default Learn;