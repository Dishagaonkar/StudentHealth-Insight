//sources referenced: https://www.youtube.com/watch?v=aK1XbxIbo2Q&list=PL8p2I9GklV45ihqIep4n3_VijItAkcibN&index=30 
//& https://codedamn.com/news/reactjs/how-to-connect-react-with-node-js 

const express = require('express');
const cors = require('cors');
const runDB = require("./mongoLogistics");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/Login", cors(),(req, res) => {

})

app.post("/Login", async(req, res) => {
  const{email, password}=req.body

  const data = {
    email:email,
    password:password
  }

  await collection.insetMany([data]);
});

app.get('/message', (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});


const main=async()=>{
  await runDB();
}
main()




