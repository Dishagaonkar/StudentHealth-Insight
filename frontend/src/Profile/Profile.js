// Source for clicking:
// https://medium.com/@zahidbashirkhan/implementing-double-click-to-edit-text-in-react-2e1d4bcb2493#:~:text=Inside%20the%20EditableText%20component%2C%20create,the%20text%20to%20be%20edited.

import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "../Login";
import { detectOverflow } from "@popperjs/core";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const cardContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#eeeeee",
};

const cardStyle = {
  width: "50%",
  padding: "10px",
};

const cardHeader = {
  textAlign: "left",
  backgroundColor: "#FFFFFF",
  padding: "15px",
  fontSize: "20px",
  height: "70px",
};

const cardColor = {
  textAlign: "left",
  backgroundColor: "#A2D9CE",
  height: "400px",
};

const backgroundColor = {
  backgroundColor: "#eeeeee",
  padding: "20px",
};

const PastEvalCard = {
  margin: "10px",
  backgroundColor: "#3091B0",
  color: "white",
  fontSize: "20px",
};

export const EditableTextProfile = ({
  initialFirst,
  initialLast,
  initialSchool,
  initialEmail,
  initialPhone,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [first, setFirst] = useState(initialFirst);
  const [last, setLast] = useState(initialLast);
  const [school, setSchool] = useState(initialSchool);
  const [email, setEmail] = useState(initialEmail);
  const [phone, setPhone] = useState(initialPhone);
  const [originalEmail, setOriginal] = useState(initialEmail);
  const [error, setError] = useState("");

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async (ev) => {
    ev.preventDefault();
    if (first === "") {
      setError("Please Enter a Name");
      return;
    } else if (last === "") {
      setError("Please Enter a Last Name");
      return;
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setError("Please enter a valid email");
      return;
    } else if (email === "") {
      setError("Please enter an email");
    }
    else if (
      phone !== "" &&
      !/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(phone)
    ) {
      if(typeof phone !== 'string') {
      }
      else {
        setError("Invalid phone number: must be in form (xxx) xxx-xxxx");
        return;
      }
    }

    try {
      const response = await axios.post("http://localhost:8000/editprofile", {
        originalEmail: originalEmail,
        first: first,
        last: last,
        school: school,
        email: email,
        phone: phone,
      });
    } catch (error) {
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
            <input
              style={{
                height: "90%",
                width: "80%",
                resize: "both",
                float: "right",
              }}
              type="text"
              onChange={(ev) => setFirst(ev.target.value)}
              className={"inputBox"}
              value={first}
            />
            <br />
            <br />
            Last Name:&nbsp;
            <input
              style={{
                height: "90%",
                width: "80%",
                resize: "both",
                float: "right",
              }}
              type="text"
              onChange={(ev) => setLast(ev.target.value)}
              className={"inputBox"}
              value={last}
            />
            <br />
            <br />
            Phone:&nbsp;
            <input
              style={{
                height: "90%",
                width: "80%",
                resize: "both",
                float: "right",
              }}
              type="text"
              onChange={(ev) => setPhone(ev.target.value)}
              className={"inputBox"}
              value={phone}
            />
            <br />
            <br />
            School:&nbsp;
            <input
              style={{
                height: "90%",
                width: "80%",
                resize: "both",
                float: "right",
              }}
              type="text"
              onChange={(ev) => setSchool(ev.target.value)}
              className={"inputBox"}
              value={school}
            />
            <br />
            <br />
            Email:&nbsp; {email}
            <br />
            <br />
            <Button
              variant="secondary"
              onClick={handleClick}
              className={"inputButton"}
              type="submit"
              value={"Save"}
            >
              Save
            </Button>
          </form>
          <label className="errorLabel">{error}</label>
        </div>
      ) : (
        <div>
          <p>
            <strong>First Name:</strong>&nbsp;{first}
          </p>
          <p>
            <strong>Last Name:</strong>&nbsp;{last}
          </p>
          <p>
            <strong>Phone:</strong>&nbsp;{phone}
          </p>
          <p>
            <strong>School:</strong>&nbsp;{school}
          </p>
          <p>
            <strong>Email:</strong>&nbsp;{email}
          </p>
          <Button variant="secondary" onClick={handleClick}>
            Edit
          </Button>{" "}
        </div>
      )}
    </div>
  );
};

function ProfileCard() {
  let firstName = "";
  let lastName = "";
  let school = "";
  let email = "";
  let phone = "";

  try {
    const location = useLocation();
    const res = location.state;
    firstName = res.data.firstName;
    lastName = res.data.lastName;
    email = res.data.email;
    school = res.data.school;
    phone = res.data.phone;
  } catch (error) {
    console.log(error);
  }

  return (
    <Card className="text-center">
      <Card.Header style={cardHeader}>Profile</Card.Header>
      <Card.Body
        style={{
          textAlign: "left",
          backgroundColor: "#A2D9CE",
          height: "400px",
          overflowY: "auto",
        }}
      >
        <Card.Title></Card.Title>
        <Card.Text>
          <EditableTextProfile
            initialFirst={firstName}
            initialLast={lastName}
            initialSchool={school}
            initialEmail={email}
            initialPhone={phone}
          />
          <br/>
          Note:&nbsp;Email cannot be changed, because it is the login.&nbsp;&nbsp;  
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

const Note = ({ id, val, text, onDelete }) => {
  const handleDelete = () => {
    if (onDelete && typeof onDelete === "function") {
      onDelete(id, val, text);
    }
  };

  return (
    <div>
      {text}
      <Button
        variant="secondary"
        onClick={handleDelete}
        style={{ float: "right" }}
      >
        <FontAwesomeIcon icon={faTrash} />
      </Button>
      <br />
      <br />
    </div>
  );
};

function NotesCard() {
  const [notes, setNotes] = useState([]);
  const [newNoteText, setNewNoteText] = useState("");

  const location = useLocation();
  const res = location.state;
  const email = res.data.email;

  useEffect(() => {
    let changed = true;
    const retrieveNotes = async () => {
      try {
        const notesRes = await axios.post("http://localhost:8000/userNotes", {
          email: email,
        });
        if (changed) {
          if (notesRes.status === 200) {
            setNotes(notesRes.data.notes);
          }
        }
      } catch (error) {
        console.log("cant get notes");
      }
    };
    retrieveNotes();
    return () => {
      changed = false;
    };
  }, []);

  const addNote = async (ev) => {
    if (newNoteText.trim() !== "" && email != "") {
      const newNote = {
        email: email,
        time: new Date().toISOString(),
        text: newNoteText,
      };
      try {
        let response = await axios.post(
          "http://localhost:8000/insertNote",
          newNote
        );
        const note = {
          email: response.data.note.email,
          text: response.data.note.text,
          time: response.data.note.time,
        };
        setNotes((prevNotes) => [...prevNotes, note]);
        setNewNoteText("");
      } catch (error) {
        console.log(error.response.data);
      }
    }
  };

  const deleteNote = async (id, val, text) => {
    console.log("deleteNote: ", id, " ", val, " ", text);
    const noteD = { email: id, time: val, text: text };
    try {
      let response = await axios.post(
        "http://localhost:8000/deleteNote",
        noteD
      );

      const updateNotes = notes.filter(
        (note) => note.time !== val && note.text !== text
      );
      setNotes(updateNotes);
    } catch (error) {
      console.log("Error deleting note:", error);
    }
  };

  return (
    <Card className="text-center">
      <form onSubmit={addNote}>
        <Card.Header style={cardHeader}>Notes</Card.Header>
        <Card.Body
          style={{
            textAlign: "left",
            backgroundColor: "#A2D9CE",
            height: "400px",
            overflowY: "scroll",
          }}
        >
          <Card.Text>
            <textarea
              type="text"
              placeholder="Enter a new note."
              value={newNoteText}
              onChange={(ev) => setNewNoteText(ev.target.value)}
              style={{
                padding: "5px",
                fontSize: "16px",
                borderRadius: "10px",
                border: "1px solid #ccc",
                marginRight: "10px",
                width: "360px",
              }}
            />
            <Button
              variant="secondary"
              onClick={addNote}
              style={{ float: "right" }}
            >
              Add Note
            </Button>
            <br /> <br />
            {notes.map((note) => (
              <Note
                val={note.time}
                id={note.email}
                text={note.text}
                onDelete={deleteNote}
              />
            ))}
          </Card.Text>
        </Card.Body>
      </form>
    </Card>
  );
}

const EvalItem = ({ id, val, title, text }) => {
  return (
    <div>
      {/* make text appear in popup when title is clicked */}
      {title}
      {'\t'}
      {val}
    </div>
  );
};

function PastEvaluations() {
  const [evals, setEvals] = useState([]);

  const location = useLocation();
  const res = location.state;
  const email = res.data.email;

  // useEffect(() => {
  //   let changed = true;
  //   const retrieveEvals = async () => {
  //     try {
  //       const evalsRes = await axios.post("http://localhost:8000/userEvals", {
  //         email: email,
  //       });
  //       if (changed) {
  //         if (evalsRes.status === 200) {
  //           setEvals(evalsRes.data.notes);
  //         }
  //       }
  //     } catch (error) {
  //       console.log("cant get evals");
  //     }
  //   };
  //   retrieveEvals();
  //   return () => {
  //     changed = false;
  //   };
  // }, []);

  return (
    <Card style={PastEvalCard}>
      <Card.Header style={{textAlign: "center"}}>Click below to see past evaluations</Card.Header>
      <Card.Body>
      {evals.length === 0 ? (
        <p>No evaluations saved yet</p>
      ) : (
        evals.map((item) => (
        <EvalItem
            key={item.time}
            val={item.time}
            id={item.email}
            title={item.title}
            text={item.eval}
        />
    ))
)}
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

  //<Login isOpen={isPopUpOpen} handleClose={handleClose} updateRes={updateRes} updateInactive={updateInactive} />

  return (
    <div style={backgroundColor}>
      <div style={cardContainerStyle}>
        <div style={cardStyle}>
          <ProfileCard />
        </div>
        <div style={cardStyle}>
          <NotesCard />
        </div>
      </div>
      <div>
        <PastEvaluations />
      </div>
    </div>
  );
};

export default Profile;
