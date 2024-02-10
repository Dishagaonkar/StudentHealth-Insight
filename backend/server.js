//sources referenced: https://www.youtube.com/watch?v=aK1XbxIbo2Q&list=PL8p2I9GklV45ihqIep4n3_VijItAkcibN&index=30 
//& https://codedamn.com/news/reactjs/how-to-connect-react-with-node-js 
//https://www.youtube.com/watch?v=p4ouSQqP3L0&list=PL8p2I9GklV45ihqIep4n3_VijItAkcibN&index=31
//https://www.javatpoint.com/expressjs-post

const express = require('express');
const cors = require('cors');
const connectDB = require("./mongoLogistics");
const createDB = require("./mongoLogistics");
//const findDB = require("./mongoLogistics");

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

  try {
    await connectDB();
    console.log("Connected to DB");
    //if(await findDB(data.email) == null){
      let loginCollection = await createDB();
      await loginCollection.create([data]);
      res.status(200).json({ message: "Data inserted successfully!" });
    /*}else{
    res.status(400).json({ message: "Email already exists!" });
    } */
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});






