const mongoose=require("mongoose");



const studentSchema=new mongoose.Schema({
    studentName:{type:String },
    email:{type:String },
    mobile:{type:String },
    pwd:{type:String },
    enrollCourses: [{type: mongoose.Schema.Types.ObjectId, ref: 'course' }]
});

module.exports=mongoose.model("Student",studentSchema,"Students");