import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';


const cardContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '#eeeeee', 
};

const cardStyle = {
  width: '50%', 
  padding: '10px',
};

const cardHeader = {
  textAlign: 'left', 
  backgroundColor: '#FFFFFF', 
  padding: '15px', 
  fontSize: '20px', 
}

const cardColor = {
  textAlign: 'left', 
  backgroundColor: '#4FA5A0', 
  width: '618px',  
  height: '400px',
}

const backgroundColor = {
  backgroundColor: '#eeeeee', 
  padding: '20px', 
}

const editButton = {
  float: 'right',
}

const PastEvalCard = {
  margin: '10px',
  backgroundColor: '#3091B0', textAlign:'center', 
  textcolor:'#FFFFF', 
  fontSize: '20px', 
  
}

const cardContainerStyle2 = {
  backgroundColor: '#eeeeee', 
};

function ProfileButton() {
  return (
    <>
      <Button variant="secondary" style={editButton}>Edit</Button>{' '}
    </>
  );
}

function NotesButton() {
  return (
    <>
      <Button variant="secondary" style={editButton}>Edit</Button>{' '}
    </>
  );
}

function EvalsButton() {
  return (
    <>
      <Button variant="secondary" >Past Evaluations</Button>{' '}
    </>
  );
}

function ProfileCard() {
  return (
    <Card className="text-center" >
      <Card.Header style={cardHeader}>
        Profile
        <ProfileButton/>
        </Card.Header >
      <Card.Body style={cardColor}>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

function NotesCard() {
  return (
    <Card className="text-center" >
      <Card.Header style={cardHeader}>
        Notes
        <NotesButton/>
        </Card.Header >
      <Card.Body style={cardColor}>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

function PastEvaluations() {
  return (
    <Card style={PastEvalCard}>
      <Card.Body>Click below to see past evaluations
        <br/>
        <EvalsButton/>
      </Card.Body>
    </Card>
  );
}

const Profile = () => {
  return (
    <div>
      <div style={cardContainerStyle}>
      <div style={cardStyle}>
        <ProfileCard/>
      </div>
      <div style={cardStyle}>
        <NotesCard/>
      </div>
    </div>
    <div>
      <PastEvaluations/>
      </div>
    </div>
  
  );


};

export default Profile;