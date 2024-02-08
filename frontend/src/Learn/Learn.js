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
      description: '...',
    },
    {
      name: 'Illness 2',
      type: 'Sexually Transmitted Disease',
      symptoms: ['congestion','skin irritation'],
      description: '...',
    }
  ];

  return (
    <div>
      <h1>Common Illnesses</h1>
      <FilteredList data={data} />
    </div>
  )
};

export default Learn;