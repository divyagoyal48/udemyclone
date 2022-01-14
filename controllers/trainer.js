const mongoose=require('mongoose');
const trainerSchema = require('../models/trainer');





module.exports.getAllTrainers=async (req,res)=>{
  let results = await trainerSchema.find({});
  return results;
 };

 module.exports.login=async(req,res)=>{
  let searchObject = req.body;
  let trainer = await trainerSchema.findOne(searchObject);

        if(trainer.length==0) return res.send(null);
        else {res.statusCode = 200;res.send(trainer);}

};





module.exports.searchTrainerByID=async(req,res)=>{
  let id= req.params.id;
   
  let student = await trainerSchema.findById(id);

  res.send(student);
}

module.exports.create=async(req,res)=>{
  let record = req.body;
  delete record.REPWD;
  let result =await trainerSchema.create(record);
  res.send(result);

}

module.exports.delete=async(req,res)=>{
  let id = req.params.id;

  let result = await trainerSchema.deleteOne({"_id": id });
  res.send(result);
}
