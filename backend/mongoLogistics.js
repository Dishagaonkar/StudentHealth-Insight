//sources referenced: mongodb website && https://www.youtube.com/watch?v=aK1XbxIbo2Q&list=PL8p2I9GklV45ihqIep4n3_VijItAkcibN&index=30
//https://www.youtube.com/watch?v=p4ouSQqP3L0&list=PL8p2I9GklV45ihqIep4n3_VijItAkcibN&index=31
//https://stackoverflow.com/questions/33627238/mongoose-find-with-multiple-conditions
const { MongoClient } = require('mongodb');
const mongoose = require("mongoose");
const express = require('express');
const cors = require('cors');
const uri = "mongodb+srv://StudentHealth:Gators24!@studenthealthinsight.gbgld4q.mongodb.net/student-health-user";
const name = 'StudentHealthInsight';

const User = mongoose.model('logins', {firstName: String, lastName: String, email: String, password: String, school: String, phone: String});
const Notes = mongoose.model('notes', {email: String, time: { type : Date, default: Date.now }, text: String});


async function connectDB() {
  mongoose.connect(uri , { useNewUrlParser: true, useUnifiedTopology: true });
  console.log("Connected to the database");
  return;
}

async function findDB(email_) {
  //finds user
  await connectDB();

  let userFound = false;

  try {
    const content = await User.find({email: email_}).exec();
    if (content.length == 0) {
      userFound = false;
    }else{
      userFound = true;
    }
    
  } catch(error) {
    console.log(error);
}
return userFound;


}



async function insertDocument(data, res) {

  let emailFound = await findDB(data.email);

  try {
    if(!emailFound){
      User.create(data);
      res.status(200).json({ message: "Profile inserted successfully!" });
    }
    else if(emailFound){
    res.status(400).json({ message: "Email already exists!" });
    }
  } 
  catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } 


}

async function updateProfileInfo(data, res){

  console.log("in update profile info");

  try{
    const dataFilter = { email: data.originalEmail};
    const updatedVersion = {
      firstName: data.first,
      lastName: data.last,
      email: data.email,
      school: data.school,
      phone: data.phone
    }

    let result = await User.findOneAndUpdate(dataFilter, updatedVersion);
    res.status(200).json({ message: "Profile updated!" });

  }catch(error){
    console.error("Could not update profile", error);
  }


}

async function validateLogin(data, res){

  let emailFound = await findDB(data.email);

  try{
    if(!emailFound){
      res.status(400).json({ message: "This email is not in our records!" });
      return;
    }
    let content = await User.find({email: data.email, password: data.password}).exec();
    if (content.length == 0) {
      res.status(400).json({ message: "This password is incorrect!" });
    
    }else{
      res.status(200).json({ message: "You are successfully signed in!", content : content});
    }
    
  } catch(error) {
    console.log(error);

  }

}
async function userNotes(data, res){

  if(data.email == ""){
    res.status(400).json({ message: "This email is blank - ignore" });
  }

  try{
    let notes = await Notes.find({email: data.email}).exec();
    res.status(200).json({ message: "User's notes are successfully retrieved!", notes : notes});

  }catch(error){
    res.status(400).json({ message: "something wrong" });
  }


}
async function insertNote(data, res){

  try{
    Notes.create(data);
    res.status(200).json({ message: "Note inserted successfully!" , note: data});
  }catch(error){
    console.error("Error inserting note:", error);
    res.status(500).json({ error: "Internal Server Error" });

  }

}

module.exports = { connectDB, findDB, insertDocument, updateProfileInfo, validateLogin, userNotes, insertNote};
