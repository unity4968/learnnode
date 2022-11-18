const express= require('express');
const app = express();
const port = process.env.PORT || 8000;

require("./db/conn"); 
const Student= require('./models/students');

app.use(express.json());

app.get("/",(req,res)=>
{
    res.send("hello from the other side thapa");
})
app.post("/students",(req,res)=>
{
    console.log(req.body);
    const user = new Student(req.body);

    user.save().then(()=>{
        res.status(201).send(user);
    }).catch((e)=>{
        res.status(400).send(e);
    })
    //res.send("Hello From Other side");
})
app.listen(port,()=>{
     console.log("Your are listern in 8k");
})