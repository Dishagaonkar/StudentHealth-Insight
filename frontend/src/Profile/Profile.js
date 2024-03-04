// Source for clicking:
// https://medium.com/@zahidbashirkhan/implementing-double-click-to-edit-text-in-react-2e1d4bcb2493#:~:text=Inside%20the%20EditableText%20component%2C%20create,the%20text%20to%20be%20edited.

import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { useLocation } from 'react-router-dom'
import { useState, useEffect} from 'react';
import Login from "../Login";
import { detectOverflow } from '@popperjs/core';
import axios from "axios";

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
  color:'white', 
  fontSize: '20px', 
}

function ProfileButton() {
  return (
    <>
      <Button variant="secondary" style={editButton}>Logout</Button>{' '}
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

export const EditableTextProfile = ({ initialFirst, initialLast, initialSchool, initialEmail, initialPhone }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [first, setFirst] = useState(initialFirst);
  const [last, setLast] = useState(initialLast);
  const [school, setSchool] = useState(initialSchool);
  const [email, setEmail] = useState(initialEmail);
  const [phone, setPhone] = useState(initialPhone);
  const [originalEmail, setOriginal] = useState(initialEmail);

  const handleClick = () => {
    setIsEditing(true);

  };

  const handleSaveClick  = async (ev) => {
    
    ev.preventDefault();

    try{
      const response = await axios.post("http://localhost:8000/editprofile", {
            originalEmail: originalEmail,
            first: first,
            last: last,
            school: school,
            email: email,
            phone: phone
      });
  
    }catch(error){
      console.log(error.response.data);
    }

    setIsEditing(false);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };


  return (
    <div>
      {isEditing ? (
        <div>
          <form onSubmit={handleSaveClick}>
          First Name:&nbsp;
        <input style={{ height: '90%', width: '80%', resize: 'both', float: 'right'}}
          type="text"
          onChange={(ev) => setFirst(ev.target.value)}
          className={"inputBox"}
        />
        <br/><br/>
        Last Name:&nbsp;
        <input style={{ height: '90%', width: '80%', resize: 'both', float: 'right'}}
          type="text"
          onChange={(ev) => setLast(ev.target.value)}
          className={"inputBox"}
        />
        <br/>
        <br/>
        School:&nbsp;
        <input style={{ height: '90%', width: '80%', resize: 'both', float: 'right'}}
          type="text"
          onChange={(ev) => setSchool(ev.target.value)}
          className={"inputBox"}
        />
        <br/>
        <br/>
        Email:&nbsp;
        <input style={{ height: '90%', width: '80%', resize: 'both', float: 'right'}}
          type="text"
          onChange={(ev) => setEmail(ev.target.value)}
          className={"inputBox"}
        />
        <br/>
        <br/>
        Phone:&nbsp;
        <input style={{ height: '90%', width: '80%', resize: 'both', float: 'right'}}
          type="text"
          onChange={(ev) => setPhone(ev.target.value)}
          className={"inputBox"}
        />
        <br/>
        <br/>
        <input className={"inputButton"} onClick={handleSaveClick} type="submit" value={"Save"} />
        </form>
        </div>
      ) : (
        <div>
        <p><strong>First Name:</strong>&nbsp;{first}</p>
        <p><strong>Last Name:</strong>&nbsp;{last}</p>
        <p><strong>School:</strong>&nbsp;{school}</p>
        <p><strong>Email:</strong>&nbsp;{email}</p>
        <p><strong>Phone:</strong>&nbsp;{phone}</p>
        <Button variant="secondary" onClick={handleClick}>Edit</Button>{' '}
      </div>
      )}
    </div>
    
  );
};

function ProfileCard() {

  let firstName = "";
  let lastName = "";
  let school = "";
  let email = ""; // does this change their user name
  let phone = "";
  
  try{
   const location = useLocation();
   const res = location.state;
   firstName = res.data.firstName;
   lastName = res.data.lastName;
   email = res.data.email;
   school = res.data.school;


  }catch(error){
    console.log(error);
  }

  return (
    <Card className="text-center" >
      <Card.Header style={cardHeader}>
        Profile
        <ProfileButton/>
        </Card.Header >
      <Card.Body style={cardColor} >
        <Card.Title></Card.Title>
        <Card.Text>
          <EditableTextProfile initialFirst={firstName} initialLast={lastName} initialSchool={school} initialEmail={email} initialPhone={phone}/>
          <br/>Note:&nbsp;Editing your email will NOT change the email you use to login.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

const Note = ({ id, text, onDelete }) => {
  return (
    <div>
      {text}
      <Button variant="secondary" onClick={() => onDelete(id)} style = {{float: 'right',}}>Delete</Button>
      <br/><br/>
    </div>
  );
};

function NotesCard() {
  const [notes, setNotes] = useState([]);
  const [newNoteText, setNewNoteText] = useState('');
  
  const addNote = () => {
    if (newNoteText.trim() !== '') {
      const newNote = {
        id: new Date().getTime(),
        text: newNoteText,
      };
      setNotes((prevNotes) => [...prevNotes, newNote]);
      setNewNoteText('');
    }
  };
  
  const deleteNote = (id) => {
    const updateNotes = notes.filter((note) => note.id !== id);
    setNotes(updateNotes);
  };

  return (
    <Card className="text-center" >
      <Card.Header style={cardHeader}>
        Notes
        </Card.Header >
      <Card.Body style={ {
        textAlign: 'left', 
        backgroundColor: '#A2D9CE',  
        height: '400px',
        overflowY: 'scroll',
      }}>
        <Card.Text>
        <textarea
          type="text"
          placeholder="Enter a new note."
          value={newNoteText}
          onChange={(e) => setNewNoteText(e.target.value)}
          style={{
            padding: '5px',
            fontSize: '16px',
            borderRadius: '10px',
            border: '1px solid #ccc',
            marginRight: '10px',
            width: '360px',
          }}
        />
        <Button variant="secondary"onClick={addNote} style = {{float: 'right',}}>Add Note</Button>
          <br/> <br/>
          {notes.map((note) => (
            <Note key={note.id} id={note.id} text={note.text} onDelete={deleteNote} />
          ))}
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

  /*
  
  const [isPopUpOpen, setPopUpOpen] = useState(false);
  const [isInactive, setInactive] = useState(true);
  const [res, setRes] = useState("empty");

  const handleOpenPopUp = () => {
    console.log("clicked for login");
    setPopUpOpen(true);
  };
  const handleClose = () => {
    setPopUpOpen(false);
  };
  const updateInactive = (temp) => {
    setInactive(temp);
  };

  const updateRes = (newRes) => { setRes(newRes); };

  const location = useLocation();

  useEffect(() => {
    const res = location.state;
    if (res === null) {
      handleOpenPopUp();
    }
  }, [location.state]); 
  */


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