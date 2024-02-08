import React, { useState } from 'react';
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
      name: 'Illness 1',
      type: 'Respitory',
      symptoms: ['congestion','fever'],
      description: 'This ...',
    },
    {
      name: 'Illness 2',
      type: 'Sexually Transmitted Disease',
      symptoms: ['congestion','skin irritation'],
      description: 'This ...',
    }
  ];

  return (
    <div>
      <h1>Common Illnesses</h1>
      <FilteredList items={data} />
    </div>
  )
};

export default Learn;