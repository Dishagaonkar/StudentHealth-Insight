import React, { useEffect, useState } from "react";
import { Card } from 'react-bootstrap';
import axios from "axios";

const backgroundColor = {
  backgroundColor: '#eeeeee',
  padding: '20px', 
}

function ChatGPT() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post("http://localhost:8000/evaluate", {prompt});
      console.log(response.data.content);
  
    }catch(error){
      console.log(error)
    }
  }
  const handlePrompt = (e) => setPrompt(e.target.value);
  return (
    <div className="container container-sm p-1">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type = "text"
            
            style={{ width: '300px', height: '40px' }}
            placeholder="Enter text"
            value={prompt}
            onChange={handlePrompt}
            />
        </div>
        {response && (
          <div className="form-group">
            <label>Response</label>
            <p>{response}</p>
          </div>
        )}
      </form>
    </div>
    
  )
  // <div>ChatGPT</div>;
}

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
  <div style={backgroundColor}>
    <Disclaimer3/>
    <br />
    <p className="title text-center text-darkGreen">
      Ask a question to learn more about your symptoms
    </p>
    <ChatGPT/> 
  </div>

  );
};

export default Evaluate;
