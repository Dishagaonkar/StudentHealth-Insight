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
  padding: '20px', 
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
          - If you are a new user, click the sign up button and enter your information!
          <br />
          - Already signed up? Click the login button and Log in into your account!
          <br />
          <br />
          <h3>Why create an account?</h3>
          - Write notes to help manage your health!
          <br />
          - Save past evaluations for access to them later!
          <br />
          <br />
          Explore each tab to see how you can take care of your health!
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Basic Health & Hygiene Practices</Accordion.Header>
        <Accordion.Body>
          - Wash hands thouroughly with soap and water (at least 20 sec), especially before eating or preparing food and after coughing, sneezing, or using the bathroom
          <br />
          - Take regular showers/baths
          <br /> 
          - Brush teeth at least twice a day & floss daily
          <br />     
          - Maintain regular doctors visits, including the dentist
          <br />
          - Cover your mouth and nose when choughing or sneezing
          <br />
          - Maintain a regular sleep schedule
          <br />
          - Stay physically active
          <br />
          - Find ways to appropriately manage stress
          <br />
          - Use safe sex practices (protection & regular reproductive check-ups)
          <br />
          - Drink plenty of water
          <br />
          - Stay up-to-date with vaccinations and medications (take medications responsibly)
          <br />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

const TopAlert = () => {

  const [show, setShow] = useState(true);

  if (show) {
      return (
        <>
          {[
            'dark',
          ].map((variant) => (
            <Alert key={variant} variant={variant} onClose={() => setShow(false)} dismissible>
              Fun fact or alert that gets updated with{' '}
              <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
              you like.
            </Alert>
          ))}
        </>
      );
    }
    return <Button onClick={() => setShow(true)}>Show Alert</Button>;
    
};

function Card1() {
  return (
    <Card className="text-center" style={cardColor}>
      <Card.Body>
        <Card.Title style={{color: 'white'}}>LEARN</Card.Title>
        <Card.Text style={{color: 'white'}}>
          Learn about different common illness
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

function Card2() {
  return (
    <Card className="text-center" style={cardColor}>
      <Card.Body>
        <Card.Title style={{color: 'white'}}>NEARBY HELP</Card.Title>
        <Card.Text style={{color: 'white'}}>
          Easy locate medical establishments near you
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

function Card3() {
  return (
    <Card className="text-center" style={cardColor}>
      <Card.Body>
        <Card.Title style={{color: 'white'}}>EVALUATE</Card.Title>
        <Card.Text style={{color: 'white'}}>
          Take a survey to see what illness you may have
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

function Disclaimer() {
  return (
    <Card style={disclaimerStyle}>
      <Card.Body>
        <Card.Title>DISCLAIMER</Card.Title>
        <Card.Text>
        We cannot provide an official diagnosis. If your are experiencing 
        symptoms, please SEE A MEDICAL PROFESSIONAL for more information!
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
        A web application that helps college students take care of their health!
      </p>
      <Info />
      <div className="side">
      <Card1 />
      <div className="space" />
      <Card2 />
      <div className="space" />
      <Card3 />
      
    </div>
    <p >
    <Disclaimer/>
    </p>
    </div>
    
  );
}

export default Dashboard;



