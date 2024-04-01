import React, { useEffect, useState } from "react";
import { Card, CardBody, CardText, Button, Form, Modal } from "react-bootstrap";
import axios from "axios";

const backgroundColor = {
  backgroundColor: "#eeeeee",
  padding: "20px",
};


let responseArr = [];
let result = [];

function ChatGPT() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [title, setTitle] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    responseArr.push(prompt);
    try {
      const response = await axios.post("http://localhost:8000/evaluate", {
        prompt,
      });
      responseArr.push(response.data.content);
      for (let i = 0; i < responseArr.length; i++) {
        result += responseArr[i];
      }
      result = responseArr.join('\n');
      setResponse(result);
      console.log(response.data.content);

    } catch (error) {
      console.log(error);
    }
  };

  const handleSave = () => {
    // Handle save logic here
    console.log('Title saved:', title);
    setShowPopup(false);
  };


  //const handlePrompt = (e) => setPrompt(e.target.value);
  const handlePrompt = (e) => setPrompt(e.target.value);


  return (
    <div className="container container-sm p-1">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            style={{ width: "300px", height: "40px" }}
            placeholder="Enter text"
            value={prompt}
            onChange={handlePrompt}
          />
        </div>
        {response && (
          <div className="form-group">
            <br/>
            <Card body>
              <pre>{result}</pre>
              </Card>
          </div>
        )}
      </form>
      <Button variant= 'secondary' style={{float: 'right'}} onClick={() => setShowPopup(true)}> Save! </Button>
      <Modal show={showPopup} onHide={() => setShowPopup(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Title Your Conversation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
  // <div>ChatGPT</div>;
}

const disclaimer3Style = {
  padding: "10px",
  marginTop: "20px",
  backgroundColor: "#367EB6",
};

function Disclaimer3() {
  return (
    <Card style={disclaimer3Style}>
      <Card.Body>
        <Card.Title style={{ color: "white" }}>
          <h1>DISCLAIMER</h1>
        </Card.Title>
        <Card.Text style={{ color: "white" }}>
          <h3>
            We cannot provide an official diagnosis. If your are experiencing
            symptoms, please SEE A MEDICAL PROFESSIONAL for more information!
          </h3>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

const Evaluate = () => {
  return (
    <div style={backgroundColor}>
      <Disclaimer3 />
      <p style={{
        backgroundColor: '#4fa5a0', 
        padding: '20px', 
        fontFamily: 'Arial', 
        fontSize: '20px', 
        textAlign: 'left', 
        marginTop: '20px', 
        color: '#FFFFFF', }}>
          Ask our chat bot anything! Here are some example prompts to get you started: (add examples)
          </p>      
      <ChatGPT />
    </div>
  );
};

export default Evaluate;
