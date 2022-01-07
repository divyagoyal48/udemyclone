var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var url = "mongodb://localhost:27017/";   
var Database = "UdemyApp";
const express = require('express');
var Collection = "Courses";



const subscriptionSchema= require('../Models/subscription');
module.exports.GetAllSubscriptions=(req,res)=>{
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


 module.exports.GetAllMySubscriptions=(req,res)=>{
   var EmailID = req.params.EmailID;
   
  try {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(Database);
        var query ={"Subscribers" : { $in : [EmailID]  } };
       
        dbo.collection(Collection).find({"Subscribers":{ $all :[EmailID]}}).toArray(function(err, result) {
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




