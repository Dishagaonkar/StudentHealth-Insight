//sources referenced: https://www.youtube.com/watch?v=aK1XbxIbo2Q&list=PL8p2I9GklV45ihqIep4n3_VijItAkcibN&index=30
//& https://codedamn.com/news/reactjs/how-to-connect-react-with-node-js
//https://www.youtube.com/watch?v=p4ouSQqP3L0&list=PL8p2I9GklV45ihqIep4n3_VijItAkcibN&index=31
//https://www.javatpoint.com/expressjs-post

const express = require("express");
const cors = require("cors");
// add
const bodyParser = require("body-parser");
const {OpenAI} = require('openai');
// add

const {
  connectDB,
  findDB,
  insertDocument,
  validateLogin,
  updateProfileInfo,
  userNotes,
  insertNote,
  deleteNote,
} = require("./mongoLogistics");
const app = express();
const axios = require("axios");
const { red } = require("@mui/material/colors");

const PORT = 5000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/places", async (req, res) => {
  try {
    const { query } = req.query;
    const apiKey = "API KEY HERE";
    const apiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=${apiKey}`;
    const response = await axios.get(apiUrl); // Use Axios to make GET request
    console.log(response);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Define other routes...

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(bodyParser.json());
app.post("/evaluate", async (req, res) => {
  const openAi = new OpenAI({
    apiKey: "API KEY HERE" 
  });
  const openai = new OpenAI(openAi);
  
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: req.body.prompt}],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0].message.content);
  res.status(200).json({ content: completion.choices[0].message.content});
});

// end evaluate code

app.post("/signup", async (req, res) => {
  console.log("hello");

  const data = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    school: req.body.school,
  };

  insertDocument(data, res);
});

app.post("/login", async (req, res) => {
  const data = {
    email: req.body.email,
    password: req.body.password,
  };

  validateLogin(data, res);
});

app.post("/editprofile", async (req, res) => {
  const data = {
    originalEmail: req.body.originalEmail,
    first: req.body.first,
    last: req.body.last,
    school: req.body.school,
    email: req.body.email,
    phone: req.body.phone,
  };


  updateProfileInfo(data, res);
});

app.post("/insertNote", async (req, res) => {
  const data = {
    email: req.body.email,
    time: req.body.time,
    text: req.body.text,
  };

  insertNote(data, res);
});

app.post("/userNotes", async (req, res) => {
  const data = {
    email: req.body.email,
  };

  userNotes(data, res);
});

app.post("/deleteNote", async (req, res) => {
  const data = {
    email: req.body.email,
    time: req.body.time,
    text: req.body.text,
  };

  deleteNote(data, res);
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});


