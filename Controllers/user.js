const mongoose = require('mongoose');
const User =require('../Models/user');

module.exports.GetAllUsers=()=> {
    


   User.find(function(error,result){

     console.log(result);

   });
}
function test() {
    


  User.find(function(error,result){

    console.log(result);

  });
}
test();