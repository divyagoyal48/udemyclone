const mongoose=require('mongoose');
const courseSchema = require('../models/course');
const Student = require('../models/student');


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
   let student = await Student.findOne({email:emailID});
   console.log(emailID);
  try {

        let result= await courseSchema.find({"_id":{ $in :student.enrolledCourses}});
               
        res.statusCode = 200;
        res.send(result);
        
  } catch (err) {
     res.statusCode=500;
     res.send(err.message); console.error(err.message)

   }
};




