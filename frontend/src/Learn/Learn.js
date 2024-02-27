import React from 'react';
import Card from 'react-bootstrap/Card';
import FilteredList from '../FilteredList';

const backgroundStyle = {
  backgroundColor: '#eeeeee', 
};

const cardStyle = {
  backgroundColor: '#A2D9CE', 
  margin: '10px'

}

const disclaimer2Style = { 
  padding: '10px', 
  marginTop: '20px', 
  backgroundColor: '#367EB6'

};

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px',
  textAlign: 'center',
}

function Disclaimer2() {
  return (
    <Card style={disclaimer2Style}>
      <Card.Body>
        <Card.Title style={{color: 'white'}}><h1>DISCLAIMER</h1></Card.Title>
        <Card.Text style={{color: 'white'}}>
        <h3>We cannot provide an official diagnosis. If your are experiencing 
        symptoms, please SEE A MEDICAL PROFESSIONAL for more information!
        </h3>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

function Footer() {
  return (
    <Card style={footerStyle}>
      <Card.Body>
        <Card.Title style={{color: 'white'}}>Resources</Card.Title>
        <Card.Text style={{color: 'white'}}>...</Card.Text>
      </Card.Body>
    </Card>
  );
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
        <h3>Click on an illness for more information, and use the filters to get more specific!</h3>
        <br/>
        <FilteredList items={data} />
        </Card.Body>
      </Card>
    );
  } 

  return (
    <div style={backgroundStyle}>
      <div>
        <Disclaimer2/>
        <br/>
        <Card1/>
        <br/>
        <Footer/>
      </div>
    </div>
  )
};

export default Learn;