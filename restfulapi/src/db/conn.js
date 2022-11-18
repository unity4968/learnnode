const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/studentsapi",{

}).then(()=>{
console.log("Connection Succesfuly.....");
}).catch((e)=>{
    console.log("Connection Error");
});


