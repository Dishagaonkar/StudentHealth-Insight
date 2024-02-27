// Source for clicking:
// https://medium.com/@zahidbashirkhan/implementing-double-click-to-edit-text-in-react-2e1d4bcb2493#:~:text=Inside%20the%20EditableText%20component%2C%20create,the%20text%20to%20be%20edited.

import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
<<<<<<< Updated upstream
=======
import Nav from 'react-bootstrap/Nav';
>>>>>>> Stashed changes
import { useLocation } from 'react-router-dom'
import { useState} from 'react';
<<<<<<< HEAD
=======
import Login from "../Login";

>>>>>>> f00bfb4e04a0134462ef5d706c4027edb8657ef5

const cardContainerStyle = {
  display: 'flex',
  // justifyContent: 'space-between',
  //backgroundColor: '#eeeeee', 
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
  backgroundColor: '#A2D9CE', 

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
  backgroundColor: '#3091B0', 
  textAlign:'center', 
  fontSize: '20px', 
  color: 'white'
}

const cardContainerStyle2 = {
  backgroundColor: '#eeeeee', 
};

function ProfileButton() {
  return (
    <>
      <Button variant="secondary" style={editButton}>Logout</Button>{' '}
    </>
  );
}

function LogOutButton() {
  return (
    <>
      <Button variant="secondary">Edit</Button>{' '}
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

const EditableText = ({ initialText }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(initialText);

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <>
          <textarea style={{ height: '90%', width: '80%', resize: 'both' }}
          type="text"
          value={text}
          onChange={handleChange}
          onBlur={handleBlur}
          />
          </>
        <Button variant="secondary" onClick={handleSaveClick}>Save</Button>
        </div>
      ) : 
      (
        <div>
        <p>{text}</p>
        <Button variant="secondary" onClick={handleClick}>Edit</Button>{' '}
      </div>
      )
      }
    </div>
  );
};


function ProfileCard() {

<<<<<<< Updated upstream
=======
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
  let fullname = "";
  let email = ""; 
  let school = "";
  
  try{
   const location = useLocation();
   const res = location.state;
   fullname = res.data.firstName + " " + res.data.lastName;
   email = res.data.email;
   school = res.data.school;

  }catch(error){
    console.log(error);
  }

<<<<<<< Updated upstream
=======
>>>>>>> f00bfb4e04a0134462ef5d706c4027edb8657ef5
>>>>>>> Stashed changes
  return (
    <Card className="text-center" >
      <Card.Header style={cardHeader}>
        Profile
        <ProfileButton/>
        </Card.Header >
      <Card.Body style={cardColor} >
        <Card.Title></Card.Title>
        <Card.Text>
<<<<<<< Updated upstream
          Name: <EditableText initialText={fullname}/>
          <br/>
          School: <EditableText initialText={school}/>
          <br/>
          Email: <EditableText initialText={email}/>
=======
<<<<<<< HEAD
          Name: <EditableText initialText="Tej Dud"/>
         <br/>
          School: <EditableText initialText="University of Florida"/>
          <br/>
          Email: <EditableText initialText="123456@ufl.edu"/>
          <div>
    </div>
=======
          Name: <EditableText initialText={fullname}/>
          <br/>
          School: <EditableText initialText={school}/>
          <br/>
          Email: <EditableText initialText={email}/>
>>>>>>> f00bfb4e04a0134462ef5d706c4027edb8657ef5
>>>>>>> Stashed changes
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
        <Card.Text>
        <EditableText initialText="Notes"/>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

function PastEvaluations() {
  return (
    <Card style={PastEvalCard}>
      <Card.Header>
      Click below to see past evaluations
      </Card.Header>
      <Card.Body>
        <EvalsButton/>
      </Card.Body>
    </Card>
  );
}

const Profile = () => {
  return (
      <div style={backgroundColor}>
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