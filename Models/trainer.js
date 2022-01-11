const mongoose=require("mongoose");
const { GetAllCourses } = require("../controllers/courses");
const course=require("./course");

const userSchema=new mongoose.Schema({
    trainerName:{type:String,  required:true, unique:true },
    email:{type:String,  required:true, unique:true },
    mobile:{type:String,  required:true, unique:true },
    pwd:{type:String,  required:true, unique:true },
    courses:[{type: Schema.type.ObjectId, ref: 'course' }],
    
    
})
const Model=new mongoose.model("Trainers",userSchema)
module.exports=Model;