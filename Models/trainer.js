const mongoose=require("mongoose");
const { GetAllCourses } = require("../controllers/courses");

const userSchema=new mongoose.Schema({
    TrainerName:{type:String,  required:true, unique:true },
    Email:{type:String,  required:true, unique:true },
    Mobile:{type:String,  required:true, unique:true },
    PWD:{type:String,  required:true, unique:true },
    COurses:{type:[String]}
    
})
const Model=new mongoose.model("Trainers",userSchema)
module.exports=Model;