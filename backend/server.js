//sources referenced: https://www.youtube.com/watch?v=aK1XbxIbo2Q&list=PL8p2I9GklV45ihqIep4n3_VijItAkcibN&index=30 
//& https://codedamn.com/news/reactjs/how-to-connect-react-with-node-js 
//https://www.youtube.com/watch?v=p4ouSQqP3L0&list=PL8p2I9GklV45ihqIep4n3_VijItAkcibN&index=31
//https://www.javatpoint.com/expressjs-post

const express = require('express');
const cors = require('cors');
const { connectDB, findDB, insertDocument, validateLogin, updateProfileInfo, userNotes, insertNote, deleteNote } = require("./mongoLogistics");

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
    password:req.body.password,
    school:req.body.school
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

app.post("/editprofile", async(req,res) => {

   const data = {
    originalEmail: req.body.originalEmail,
    first: req.body.first,
    last: req.body.last,
    school: req.body.school,
    email: req.body.email,
    phone: req.body.phone
   }

   console.log("in app.post");

   updateProfileInfo(data, res);

});

app.post("/insertNote", async(req,res) => {
  const data = {
    email: req.body.email,
    time: req.body.time,
    text: req.body.text
  }

  insertNote(data, res);

});

app.post("/userNotes", async(req,res) => {
  const data = {
    email: req.body.email
  }

  userNotes(data, res);
});

app.post("/deleteNote", async(req,res) => {
  const data = {
    email: req.body.email,
    time: req.body.time, 
    text: req.body.text
  }

  deleteNote(data, res);
  
})


app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});






