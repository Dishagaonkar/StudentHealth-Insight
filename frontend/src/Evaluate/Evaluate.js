import React, { useEffect, useState } from "react";
import { Card } from 'react-bootstrap';
import axios from "axios";

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
      <h1 className="title text-center text-darkGreen"> ChatGPT API </h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="">Ask questions</label>
          <input
            type = "text"
            className="shadow-sm"
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
  <div>
    <ChatGPT/> 
  </div>

  );
};

export default Evaluate;
