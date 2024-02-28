// Source for clicking:
// https://medium.com/@zahidbashirkhan/implementing-double-click-to-edit-text-in-react-2e1d4bcb2493#:~:text=Inside%20the%20EditableText%20component%2C%20create,the%20text%20to%20be%20edited.

import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { useLocation } from 'react-router-dom'
import { useState} from 'react';
import Login from "../Login";


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

const EditableTextNotes = ({ initialText }) => {
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
        <textarea style={{ height: '90%', width: '80%', resize: 'both' }}
          type="text"
          value={text}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <br/>
        <Button variant="secondary" onClick={handleSaveClick}>Save</Button>
        </div>
      ) : (
        <div>
        <p>{text}</p>
        <Button variant="secondary" onClick={handleClick}>Edit</Button>{' '}
      </div>
      )}
    </div>
  );
};

const EditableTextProfile = ({ initialText }) => {
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
        <input style={{ height: '90%', width: '80%', resize: 'both' }}
          type="text"
          value={text}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <br/>
        <Button variant="secondary" onClick={handleSaveClick}>Save</Button>
        </div>
      ) : (
        <div>
        <p>{text}</p>
        <Button variant="secondary" onClick={handleClick}>Edit</Button>{' '}
      </div>
      )}
    </div>
  );
};

function ProfileCard() {

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

  return (
    <Card className="text-center" >
      <Card.Header style={cardHeader}>
        Profile
        <ProfileButton/>
        </Card.Header >
      <Card.Body style={cardColor} >
        <Card.Title></Card.Title>
        <Card.Text>
          Name: <EditableTextProfile initialText={fullname}/>
          <br/>
          School: <EditableTextProfile initialText={school}/>
          <br/>
          Email: <EditableTextProfile initialText={email}/>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

const Note = ({ id, text, onDelete }) => {
  return (
    <div>
      {text}
      <button onClick={() => onDelete(id)} style = {{float: 'right',}}>Delete</button>
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
      <Card.Body style={cardColor}>
        <Card.Text>
        <input
          type="text"
          placeholder="Enter new note"
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
        <button onClick={addNote} style = {{float: 'right',}}>Add Note</button>
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