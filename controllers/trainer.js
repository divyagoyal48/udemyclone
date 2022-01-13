var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var url = "mongodb://localhost:27017/";   
var Database = "UdemyApp";
const express = require('express');
var Collection = "Trainers";



const router= express.Router()
const trainerSchema= require('../Models/trainer')
module.exports.GetAllTrainers=(req,res)=>{
    try {
      MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db(Database);
          dbo.collection(Collection).find({}).toArray(function(err, result) {
          if (err) throw err;
          
          res.statusCode = 200;
          res.send(result);
          db.close();
          });
       });
    } catch (err) {
       res.statusCode=500;
       res.send(err.message); console.error(err.message)

     }
 };

 module.exports.Login=(req,res)=>{
 
  var SearchObject = req.body;
console.log(SearchObject);
  
  MongoClient.connect(url, function(err, db) {
     if (err) throw err;
     var dbo = db.db(Database);
     var myquery = SearchObject;
     dbo.collection(Collection).find(SearchObject).toArray(function(err, result) {
        if (err) throw err;
        
        console.log(result);
        res.statusCode = 200;
        if(result.length==0) return res.send(null);
        else res.send(result[0]);
        db.close();
     });
   });
};





module.exports.SearchTrainerByID=(req,res)=>{
    var id= req.params.id;
   
   var query=new RegExp(id, "g");
   MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db(Database);
      dbo.collection(Collection).find({"name": query},{ projection: {name:1 } }).limit(100).toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
        console.log(Number.isInteger(req.params.Limit));
        db.close();
      });
    });
}

module.exports.Create=(req,res)=>{
    var record = req.body;
     console.log(record);
     delete record.REPWD;
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db(Database);
      var myobj = record;
      dbo.collection(Collection).insertOne(myobj, function(err, result) {
        if (err) throw err;
        res.send(result);
        db.close();
      });   
    }); 
}

module.exports.Delete=(req,res)=>{
    var id = req.params.id;
   MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db(Database);
      var myquery = {"_id": ObjectId(id)};
      dbo.collection(Collection).deleteOne(myquery, function(err, obj) {
        if (err) throw err;
        console.log(myquery);
        res.send(obj);
        db.close();
      });
    });
}
