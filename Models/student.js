const mongoose=require("mongoose");


const studentSchema=new mongoose.Schema({
    StudentName:{type:String },
    Email:{type:String },
    Mobile:{type:String },
    PWD:{type:String }
    
});

module.exports=mongoose.model("Student",studentSchema,"Students");