const mongoose=require('mongoose');
const studentSchema = require('../Models/student');
mongoose.connect("mongodb://localhost:27017/UdemyApp");


module.exports.GetAllStudents=async (req,res)=>{
console.log("asdasdasd");
  var Results = await studentSchema.find({});
  return Results;
};

module.exports.Login=async (req,res)=>{
 
  var SearchObject = req.body;
  var Student = await studentSchema.findOne(SearchObject);

        if(Student.length==0) return res.send(null);
        else {res.statusCode = 200;res.send(Student);}
};





module.exports.SearchStudentByID=async (req,res)=>{
    var id= req.params.id;
   
    var Student = await studentSchema.findById(id);

    res.send(Student);
}

module.exports.Create=async(req,res)=>{
    var record = req.body;
    delete record.REPWD;
    var Result =await studentSchema.create(record);
    res.send(Result);

}

module.exports.Delete=async(req,res)=>{
    var id = req.params.id;

    var Result = await studentSchema.deleteOne({"_id": id });
    res.send(Result);
}
