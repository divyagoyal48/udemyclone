const mongoose=require('mongoose');
const Course = require('../models/course');



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
  
  console.log(emailID);

  let selectedCourse = await Course.findById(courseID); 
  let updatedObject =JSON.parse(JSON.stringify(selectedCourse));
  if(!updatedObject.subscribers.includes(emailID)) updatedObject.subscribers.push(emailID);


  delete updatedObject._id;
  let result= await Course.updateOne(selectedCourse,updatedObject);
   console.log(result);

  res.send(result);
  
}


module.exports.unSubscribe=async(req,res)=>{
  let courseID= req.params.courseID;
  let emailID= req.params.emailID;
 
  let selectedCourse = await Course.findById(courseID); 
  let updatedObject =JSON.parse(JSON.stringify(selectedCourse));
  if(updatedObject.subscribers.includes(emailID)) 
    updatedObject.subscribers.splice(updatedObject.subscribers.indexOf(emailID),1);

  delete updatedObject._id;
  let result= await Course.updateOne(selectedCourse,updatedObject);
   console.log(result);

  res.send(result);

 
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
    res.send(result);

}


module.exports.delete=async (req,res)=>{

  let id = req.params.id;
  console.log(id);
  let result = await Course.deleteOne({"_id": id });
  res.send(result);

}