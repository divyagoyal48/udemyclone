const mongoose=require('mongoose');
const courseSchema = require('../models/course');


module.exports.getAllSubscriptions=async(req,res)=>{
    try {


      let result = await courseSchema.find({});
      res.send(result);
      
         
    } catch (err) {
       res.statusCode=500;
       res.send(err.message); console.error(err.message)

     }
 };


 module.exports.getAllMySubscriptions=async(req,res)=>{
   let emailID = req.params.emailID;
   console.log(emailID);
  try {

        let result= await courseSchema.find({"subscribers":{ $all :[emailID]}});
               
        res.statusCode = 200;
        res.send(result);
        
  } catch (err) {
     res.statusCode=500;
     res.send(err.message); console.error(err.message)

   }
};




