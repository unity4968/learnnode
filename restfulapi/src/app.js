const express= require('express');
const app = express();
const port = process.env.PORT || 8000;

require("./db/conn"); 
const Student= require('./models/students');
const studentrouter = require('./routers/student');
app.use(express.json());
app.use(express.urlencoded());
app.use(studentrouter);

app.listen(port,()=>{
     console.log("Your are listern in 8k");
})

