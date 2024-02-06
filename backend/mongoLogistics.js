//sources referenced: mongodb website && https://www.youtube.com/watch?v=aK1XbxIbo2Q&list=PL8p2I9GklV45ihqIep4n3_VijItAkcibN&index=30
const { MongoClient } = require('mongodb');
const mongoose = require("mongoose");

const uri = "mongodb+srv://StudentHealth:Gators24!@studenthealthinsight.gbgld4q.mongodb.net/?retryWrites=true&w=majority";
const name = 'StudentHealthInsight';

const client = new MongoClient(uri);

async function runDB() {
  try {
    await client.connect();
    await client.db(name).command({ ping: 1 });
    console.log("Connected to MongoDB!");

    await mongoose.connect(uri + "/loginInfo", { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to the database");

    const newSchema = new mongoose.Schema({
      email: {
        type: String,
        required: true
      },
      password: {
        type: String,
        required: true
      }
    });

    const collection = mongoose.model("collection", newSchema);
    return collection; // Return the collection

  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error; // Throw the error to handle it in the calling module
  }
}

module.exports = runDB;

