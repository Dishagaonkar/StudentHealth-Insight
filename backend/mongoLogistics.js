//sources referenced: mongodb website && https://www.youtube.com/watch?v=aK1XbxIbo2Q&list=PL8p2I9GklV45ihqIep4n3_VijItAkcibN&index=30
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://StudentHealth:Gators24!@studenthealthinsight.gbgld4q.mongodb.net/?retryWrites=true&w=majority";
const name = 'StudentHealthInsight';

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);


async function runDB() {

    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db(name).command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    const mongoose = require("mongoose");
    mongoose.connect("mongodb://localhost:27017/admin")
        .then(() => {
            console.log("connected to database");
        })
        .catch(() => {
            console.log("connection failed");
        })

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
    module.exports = collection;


}
module.exports = runDB;