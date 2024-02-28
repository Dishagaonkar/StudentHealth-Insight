import React from 'react';
import { Card } from 'react-bootstrap';

const disclaimer3Style = { 
  padding: '10px', 
  marginTop: '20px', 
  backgroundColor: '#367EB6'
}

function Disclaimer3() {
  return (
    <Card style={disclaimer3Style}>
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


const Evaluate = () => {
  return (
  <div>
    <Disclaimer3/>
    <br/>
    Evaluate Page(under construction)
  </div>
  );
};

export default Evaluate;