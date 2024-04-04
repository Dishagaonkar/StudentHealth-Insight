// sources for alert: 
// - https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/
// - https://www.sfcdcp.org/communicable-disease/healthy-habits/#1511206262300-f4204a92-9a95
// - https://www.cdc.gov/chronicdisease/about/prevent/index.htm

import React from "react";
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './Dashboard.css';

import 'bootstrap/dist/css/bootstrap.min.css';


const mainStyle = { 
  backgroundColor: '#4fa5a0', 
  padding: '20px', 
  fontFamily: 'Arial', 
  fontSize: '35px', 
  textAlign: 'center', 
  marginTop: '20px', 
  color: '#FFFFFF', 
};

const messageStyle = { 
  padding: '10px', 
  fontFamily: 'Arial', 
  fontSize: '17px', 
  textAlign: 'center', 
  color: '#000000', 
};

const backgroundColor = {
  backgroundColor: '#eeeeee',
  padding: '20px', 
}

const cardColor = {
  backgroundColor: '#367EB6', 
  width: '400px', 
  height: '100px'

}

const tabColor = {
  backgroundColor: '#A9CCE3', 
  padding: '20px', 
}

const disclaimerStyle = { 
  padding: '10px', 
  marginTop: '20px', 
  backgroundColor: '#A2D9CE'

};

function HeaderAndFooterExample() {
  return (
    <Card className="text-center">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
}

// function Card1() {
//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Body style={cardColor}>
//         <Card.Title >Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//   );
// }

function Info() {
  return (
    <Accordion flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is StudentHealth-Insight?</Accordion.Header>
        <Accordion.Body>
          <h3></h3>
        StudentHealth-Insight is a web application that educates college 
        students about common illnesses and injuries. Our focus is student health 
        care awareness, especially the most common illnesses/diseases. Our goal is to
        address challenges of student health while living alone, and reduce the stigma surrounding
        college health issues. Although our application will not provide
        an official diagnosis, it serves to provide students a quick synopsis and guide 
        them in the right direction on how to efficiently treat the illness/injury.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How to Get Started</Accordion.Header>
        <Accordion.Body>
          <h3>Login or Signup:</h3> 
          &#8226; If you are a new user, click the sign up button and enter your information
          <br />
          &#8226; Already signed up? Click the login button and Log in into your account
          <br />
          <br />
          <h3>Why create an account?</h3>
          &#8226; Write notes to help manage your health
          <br />
          &#8226; Save past evaluations for access to them later
          <br />
          <br />
          Explore each tab to see how you can take care of your health!
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Our Features</Accordion.Header>
        <Accordion.Body>
          <h3>Learn</h3> 
          &#8226; Learn about the most common illness that affect college students
          <br />
          &#8226; Filter the information by illness types or symptoms, or just search by the illness's name
          <br />
          <br />
          <h3>Nearby Help</h3>
          &#8226; Find information about medical professionals near you
          <br/>
          &#8226; Use a zip code and the filter to find an establishment that benefits you the most
          <br />
          <br />
          <h3>Evaluate</h3>
          &#8226; Speak with our chatbot to find out more about how you may be feeling
          <br/>
          &#8226; Ask about anything you want, but know that if any symptoms are severe you should seek medical advise from a medical professional
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Basic Health & Hygiene Practices</Accordion.Header>
        <Accordion.Body>
        &#8226; Wash hands thouroughly with soap and water (at least 20 sec), especially before eating or preparing food and after coughing, sneezing, or using the bathroom
        <br />
          &#8226; Cover your mouth and nose when choughing or sneezing
          <br />
          &#8226; Use safe sex practices (protection & regular reproductive check-ups)
          <br />
          &#8226; Maintain a regular sleep schedule
          <br />
          &#8226; Stay physically active
          <br />
          &#8226; Find ways to appropriately manage stress
          <br />
          &#8226; Drink plenty of water
          <br />
          &#8226; Take regular showers/baths
          <br /> 
          &#8226; Brush teeth at least twice a day & floss daily
          <br />     
          &#8226; Maintain regular doctors visits, including the dentist
          <br />
          &#8226; Stay up-to-date with vaccinations and medications (take medications responsibly)
          <br />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

const TopAlert = () => {

  const [show, setShow] = useState(true);
  let factsArr = ["A balanced diet includes fruits, veggies, whole grains, lean protein, and low-fat dairy products.",
  "At least 150 minutes of moderate physcial activity, with 2 days of muscle strengthening is recommended every week.",
  "It's important to visit a doctor regularly!", 
  "Reminder! Make sure to get 7 hours of sleep.", 
  "Washing your hands is an important habit to prevent spreading germs.", 
  "Remember to stay home if you are feeling sick!", 
  "Reminder to clean commonly used surfaces around your living space!"
];

  if (show) {
      return (
        <>
          {[
            'dark',
          ].map((variant) => (
            <Alert key={variant} variant={variant} onClose={() => setShow(false)} dismissible>
            <strong>
            {factsArr[(Math.floor(Math.random() * factsArr.length))]}
              </strong>
            </Alert>
          ))}
        </>
      );
    }
    return <Button variant='secondary' onClick={() => setShow(true)}>Show Alert</Button>;
    
};

function Disclaimer() {
  return (
    <Card style={disclaimerStyle}>
      <Card.Body>
        <Card.Title><h1>DISCLAIMER</h1></Card.Title>
        <Card.Text>
        <h3>We cannot provide an official diagnosis. If your are experiencing 
        symptoms, please SEE A MEDICAL PROFESSIONAL for more information!
        </h3>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}


const Dashboard = () => {
  return (
    <div style={backgroundColor}>
      <p>
        <TopAlert />
      </p>
      <p style={mainStyle}>
        Welcome to StudentHealth-Insight!
      </p> 
      <p style={messageStyle}>
        A web application to help college students maintain their health!
      </p>
      <Info />
    <p >
    <Disclaimer/>
    </p>
    </div>
    
  );
}

export default Dashboard;



