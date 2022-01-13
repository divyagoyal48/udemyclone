const mongoose=require('mongoose');
const courseSchema = require('../models/course');


module.exports.getAllSubscriptions=async(req,res)=>{
    try {


      var Result = await courseSchema.find({});
      res.send(Result);
      
         
    } catch (err) {
       res.statusCode=500;
       res.send(err.message); console.error(err.message)

     }
 };


 module.exports.getAllMySubscriptions=async(req,res)=>{
   var EmailID = req.params.EmailID;
   console.log(EmailID);
  try {

        var Result= await courseSchema.find({"Subscribers":{ $all :[EmailID]}});
               
        res.statusCode = 200;
        res.send(Result);
        
  } catch (err) {
     res.statusCode=500;
     res.send(err.message); console.error(err.message)

   }
};




