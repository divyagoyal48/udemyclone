var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var url = "mongodb://localhost:27017/";   
var Database = "UdemyApp";
const express = require('express');
var Collection = "Courses";



const router= express.Router();
const courseSchema= require('../Models/course');

module.exports.GetAllCourses=(req,res)=>{
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

module.exports.GetAllCoursesOfTrainer=(req,res)=>{
  
  var TrainerID=req.params.TrainerID;
  console.log(TrainerID);
  try {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(Database);
        dbo.collection(Collection).find({"Trainer":TrainerID}).toArray(function(err, result) {
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

module.exports.Subscribe=(req,res)=>{
  var CourseID= req.params.CourseID;
  var EmailID= req.params.EmailID;
 
  
  console.log(EmailID);
  
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(Database);

    dbo.collection(Collection).findOne({"_id": ObjectId(CourseID)}, function(err, obj) {
       if (err) throw err;
       var TargetObject = obj;
       var UpdatedObject =JSON.parse(JSON.stringify(TargetObject));
       
       if(!UpdatedObject.Subscribers.includes(EmailID)) UpdatedObject.Subscribers.push(EmailID);
      
       delete UpdatedObject._id;
       dbo.collection(Collection).updateOne(TargetObject, {$set : UpdatedObject}, function(err, result) {
          if (err) throw err;

          res.send(result);
          db.close();
        });
     });
  });
}


module.exports.UnSubscribe=(req,res)=>{
  var CourseID= req.params.CourseID;
  var EmailID= req.params.EmailID;
 
  
  console.log(EmailID);
  
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(Database);

    dbo.collection(Collection).findOne({"_id": ObjectId(CourseID)}, function(err, obj) {
       if (err) throw err;
       var TargetObject = obj;
       var UpdatedObject =JSON.parse(JSON.stringify(TargetObject));
       
       if(UpdatedObject.Subscribers.includes(EmailID)) UpdatedObject.Subscribers.splice(UpdatedObject.Subscribers.indexOf(EmailID),1);
      
       delete UpdatedObject._id;
       dbo.collection(Collection).updateOne(TargetObject, {$set : UpdatedObject}, function(err, result) {
          if (err) throw err;

          res.send(result);
          db.close();
        });
     });
  });
}



module.exports.SearchCourseByName=(req,res)=>{
    var Keyword= req.params.Keyword;
   
   var query=new RegExp(Keyword, 'i');
   MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db(Database);
      dbo.collection(Collection).find({"CourseName": query}).limit(100).toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
        console.log(Number.isInteger(req.params.Limit));
        db.close();
      });
    });
}
 


module.exports.SearchCourseByID=(req,res)=>{
    var id= req.params.id;
   //console.log(id);return;
   var query={"_id": ObjectId(id)};
   
   MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db(Database);
      dbo.collection(Collection).findOne(query,function(err, result) {
        if (err) throw err;
        res.send(result);
        console.log(query);
        db.close();
      });
    });
}



module.exports.Create=(req,res)=>{
    var record = req.body;
     
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
