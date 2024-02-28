import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FilteredList from '../FilteredList';

const backgroundStyle = {
  backgroundColor: '#eeeeee', 
}

const cardStyle = {
  backgroundColor: '#A2D9CE', 

}

const disclaimer2Style = { 
  padding: '10px', 
  marginTop: '20px', 
  backgroundColor: '#367EB6'
}

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
        <Card.Title style={{color: 'white'}}>References</Card.Title>
        <Card.Text style={{color: 'white'}}>
        Centers for Disease Control and Prevention. CDC, https://www.cdc.gov/.
        <br/>"Common Illnesses." Princeton University Health Services, https://uhs.princeton.edu/health-resources/common-illnesses.
        <br/>"Health Issues Among College Students in the US." Statista, https://www.statista.com/statistics/826999/health-issues-among-college-students-us/.
        <br/>Mayo Clinic. Mayo Clinic, https://www.mayoclinic.org/.
        <br/>MedlinePlus. MedlinePlus, https://medlineplus.gov.
        <br/>"US College Student Conditions." Statista, https://www.statista.com/statistics/1126483/us-college-student-conditions/.
        <br/>WebMD. WebMD, https://www.webmd.com/.
        </Card.Text>
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