const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    CourseName:{type:String,  required:true, unique:true },
    Title:{type:String,  required:true, unique:true },
    Description:{type:String,  required:true, unique:true },
    URL:{type:String,  required:true, unique:true }
    
})
const Model=new mongoose.model("Subscriptions",userSchema)
module.exports=Model;