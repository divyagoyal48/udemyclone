const mongoose=require('mongoose');
const studentSchema = require('../models/student');



module.exports.getAllStudents=async (req,res)=>{
console.log("asdasdasd");
  let results = await studentSchema.find({});
  return results;
};

module.exports.login=async (req,res)=>{
 
  let searchObject = req.body;
  let student = await studentSchema.findOne(searchObject);

        if(student.length==0) return res.send(null);
        else {res.statusCode = 200;res.send(student);}
};





module.exports.searchStudentByID=async (req,res)=>{
    let id= req.params.id;
   
    let student = await studentSchema.findById(id);

    res.send(student);
}

module.exports.create=async(req,res)=>{
    let record = req.body;
    delete record.REPWD;
    let result =await studentSchema.create(record);
    res.send(result);

}

module.exports.delete=async(req,res)=>{
    let id = req.params.id;

    let result = await studentSchema.deleteOne({"_id": id });
    res.send(result);
}
