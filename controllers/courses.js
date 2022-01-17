const mongoose=require('mongoose');
const Course = require('../models/course');
const Student = require('../models/student');
const Trainer = require('../models/trainer');



module.exports.getAllCourses=async (req,res)=>{
  try {
   
    let courses =await  Course.find({});
    console.log(courses);
    res.send(courses);
  } catch (err) {
     res.statusCode=500;
     res.send(err.message); console.error(err.message)

   }
};


module.exports.getAllCoursesOfTrainer=async (req,res)=>{
  
  let trainerID=req.params.trainerID;
  console.log(trainerID);
  try {
   
        let result = await Course.find({"trainer":trainerID});
                
        res.statusCode = 200;
        res.send(result);
       
        
   
  } catch (err) {
     res.statusCode=500;
     console.error(err.message);

     res.send(err.message); 
   }
};


module.exports.subscribe=async (req,res)=>{
  let courseID= req.params.courseID;
  let emailID= req.params.emailID;
  
 var stud = await Student.findOne({email:emailID});


 if(!stud.enrolledCourses.includes(courseID))stud.enrolledCourses.push(courseID);
 
  stud.save();
  res.send(stud);
}


module.exports.unSubscribe=async(req,res)=>{
  let courseID= req.params.courseID;
  let emailID= req.params.emailID;
  
 var stud = await Student.findOne({email:emailID});


 if(stud.enrolledCourses.includes(courseID))
 stud.enrolledCourses.splice(stud.enrolledCourses.indexOf(courseID));
 
  stud.save();
  res.send(stud);
 
}



module.exports.searchCourseByName = async (req,res)=>{
   let keyword= req.params.keyword;
   console.log(req.params.keyword);
   let query=new RegExp(keyword, 'i');
  
   let courses =await Course.find({"courseName": query});

   res.send(courses);
       
}
 
module.exports.searchCourseByID=async(req,res)=>{
    let id= req.params.id;
    console.log(id);
    let result = await Course.findById(id);
    res.send(result);
}

module.exports.create=async (req,res)=>{
    let record = req.body; 
    console.log(record);
    let result = await Course.create(record);
    console.log(result);
    res.send(result);

}


module.exports.delete=async (req,res)=>{

  let id = req.params.id;
  console.log(id);
  let result = await Course.deleteOne({"_id": id });
  res.send(result);

}