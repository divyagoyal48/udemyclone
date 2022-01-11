const mongoose=require("mongoose");
const course=require("./course");


const studentSchema=new mongoose.Schema({
    studentName:{type:String },
    email:{type:String },
    mobile:{type:String },
    pwd:{type:String },
    enrollCourses: [{type: Schema.type.ObjectId, ref: 'course' }]
});

module.exports=mongoose.model("Student",studentSchema,"Students");