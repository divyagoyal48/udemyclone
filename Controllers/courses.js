const mongoose=require('mongoose');
const Course = require('../models/course');
mongoose.connect("mongodb://localhost:27017/UdemyApp");


module.exports.GetAllCourses=async (req,res)=>{
  try {
   
    var Courses =await  Course.find({});
    console.log(Courses);
    res.send(Courses);
  } catch (err) {
     res.statusCode=500;
     res.send(err.message); console.error(err.message)

   }
};


module.exports.GetAllCoursesOfTrainer=async (req,res)=>{
  
  var TrainerID=req.params.TrainerID;
  console.log(TrainerID);
  try {
   
        var Result = await Course.find({"Trainer":TrainerID});
                
        res.statusCode = 200;
        res.send(Result);
       
        
   
  } catch (err) {
     res.statusCode=500;
     console.error(err.message);

     res.send(err.message); 
   }
};


module.exports.Subscribe=async (req,res)=>{
  var CourseID= req.params.CourseID;
  var EmailID= req.params.EmailID;
  
  console.log(EmailID);

  var SelectedCourse = await Course.findById(CourseID); 
  var UpdatedObject =JSON.parse(JSON.stringify(SelectedCourse));
  if(!UpdatedObject.Subscribers.includes(EmailID)) UpdatedObject.Subscribers.push(EmailID);


  delete UpdatedObject._id;
  var Result= await Course.updateOne(SelectedCourse,UpdatedObject);
   console.log(Result);

  res.send(Result);
  
}


module.exports.UnSubscribe=async(req,res)=>{
  var CourseID= req.params.CourseID;
  var EmailID= req.params.EmailID;
 
  var SelectedCourse = await Course.findById(CourseID); 
  var UpdatedObject =JSON.parse(JSON.stringify(SelectedCourse));
  if(UpdatedObject.Subscribers.includes(EmailID)) 
    UpdatedObject.Subscribers.splice(UpdatedObject.Subscribers.indexOf(EmailID),1);

  delete UpdatedObject._id;
  var Result= await Course.updateOne(SelectedCourse,UpdatedObject);
   console.log(Result);

  res.send(Result);

 
}



module.exports.SearchCourseByName = async (req,res)=>{
   var Keyword= req.params.Keyword;
   console.log(req.params.Keyword);
   var query=new RegExp(Keyword, 'i');
  
   var Courses =await Course.find({"CourseName": query});
        res.send(Courses);
       
}
 
module.exports.SearchCourseByID=async(req,res)=>{
    var id= req.params.id;
    console.log(id);
    var Result = await Course.findById(id);
    res.send(Result);
}

module.exports.Create=async (req,res)=>{
    var record = req.body; 
    console.log(record);
    var Result = await Course.create(record);
    res.send(Result);

}


module.exports.Delete=async (req,res)=>{

  var id = req.params.id;
  console.log(id);
  var Result = await Course.deleteOne({"_id": id });
  res.send(Result);

}