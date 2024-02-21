import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FilteredList from '../FilteredList';

const backgroundStyle = {
  backgroundColor: '#eeeeee', 
};

const cardStyle = {
  backgroundColor: '#3091B0', 
  margin: '10px'

}


const Learn = () => {
  const data = [
    /*
    {
      id: ,
      name: '',
      type: ['',''],
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

  function Card1() {
    return (
      <Card>
        <Card.Body style={cardStyle}>
        <h1>Common Illnesses</h1>
        <h2>This is not a complete list. If your are experiencing symptoms, please SEE A MEDICAL PROFESSIONAL for more information!</h2>
        <h2>See our Nearby Help page to find medical professionals near you!</h2>
        <p>Click on an illness for more information</p>
        <FilteredList items={data} />
        </Card.Body>
      </Card>
    );
  } 

  return (
    <div style={backgroundStyle}>
      <div>
        <Card1/>
      </div>
    </div>
  )
};

export default Learn;