const mongoose=require("mongoose");

const courseSchema=new mongoose.Schema({
    CourseName:{type:String,  required:true, unique:true },
    Title:{type:String,  required:true, unique:true },
    Description:{type:String,  required:true, unique:true },
    URL:{type:String,  required:true, unique:true },
    Subscribers:{type:String,  required:true, unique:true }
    
})
const Model=new mongoose.model("Courses",courseSchema)
module.exports=Model;