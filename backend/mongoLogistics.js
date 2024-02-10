//sources referenced: mongodb website && https://www.youtube.com/watch?v=aK1XbxIbo2Q&list=PL8p2I9GklV45ihqIep4n3_VijItAkcibN&index=30
//https://www.youtube.com/watch?v=p4ouSQqP3L0&list=PL8p2I9GklV45ihqIep4n3_VijItAkcibN&index=31
const { MongoClient } = require('mongodb');
const mongoose = require("mongoose");

const uri = "mongodb+srv://StudentHealth:Gators24!@studenthealthinsight.gbgld4q.mongodb.net/student-health-user";
const name = 'StudentHealthInsight';

const User = mongoose.model('logins', {firstName: String, lastName: String, email: String, password: String});

//const client = new MongoClient(uri);

async function connectDB() {
  await mongoose.connect(uri , { useNewUrlParser: true, useUnifiedTopology: true });
  console.log("Connected to the database");
}
module.exports = connectDB;

/* async function createDB() {
  try {
    const newSchema = new mongoose.Schema({
      firstName: {
        type: String,
        required: true
      },
      lastName: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      password: {
        type: String,
        required: true
      }
    });

    const collection = mongoose.model("logins", newSchema);
    return collection;

  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error; // Throw the error to handle it in the calling module
  }
} 

module.exports = createDB; */

async function findDB(email_) {
  connectDB();
  let userFound = false;

  try {
    await User.find({email: email_}).exec();
    userFound = true;
    console.log("User found");
  } catch(error) {
    userFound = false;
  }

  return userFound;
}

module.exports = findDB; 

async function insertDocument(data) {
  //let model = await createDB();

  User.create(data);

  console.log("Document inserted");
}

module.exports = insertDocument;