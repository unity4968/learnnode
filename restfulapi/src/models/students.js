const mongoose = require('mongoose');
const validator = require('validator');


const studentschema =new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength: 3
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email Id Already Present"],
        validate(value){
            if(!validator.isEmail(value) ){
                throw new console.error("Invalid Email");
            }
        }
    },
    phone:
    {
        type:Number,
        min:10,
        required:true,unique:true
    },
    address:{
        type:String,
        required:true
    }
});
// we will create new colletion
const Student = new mongoose.model("Student",studentschema);

module.exports=Student;

