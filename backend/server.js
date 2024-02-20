//sources referenced: https://www.youtube.com/watch?v=aK1XbxIbo2Q&list=PL8p2I9GklV45ihqIep4n3_VijItAkcibN&index=30 
//& https://codedamn.com/news/reactjs/how-to-connect-react-with-node-js 
//https://www.youtube.com/watch?v=p4ouSQqP3L0&list=PL8p2I9GklV45ihqIep4n3_VijItAkcibN&index=31
//https://www.javatpoint.com/expressjs-post

const express = require('express');
const cors = require('cors');
const connectDB = require("./mongoLogistics");
const createDB = require("./mongoLogistics");
const findDB = require("./mongoLogistics");
const insertDocument = require("./mongoLogistics");
const validateLogin = require("./mongoLogistics");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.post("/signup", async (req, res) => {
  console.log("hello");

  const data = {
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    email:req.body.email,
    password:req.body.password
  }

  insertDocument(data, res);
    
  
});

app.post("/login", async(req, res) => {
  const data = {
    email:req.body.email,
    password:req.body.password
  }

  validateLogin(data, res);

});

app.get("/emailexists", (req, res) => {
  res.json({ message: "This email already exists!" });
});



app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});






