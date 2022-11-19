const express= require('express');
const app = express();
const port = process.env.PORT || 8000;

require("./db/conn"); 
const Student= require('./models/students');

app.use(express.json());
app.use(express.json());
app.use(express.urlencoded());
app.get("/",(req,res)=>
{
    res.send("hello from the other side thapa");
})

app.post("/students",(req,res)=>
{
   // console.log(req.body);
   // const obj = JSON.stringify(req.body);
   // console.log(obj);
    const user = new Student(req.body);
    user.save().then(()=>{
        res.status(201).send(user);
    }).catch((e)=>{
        res.status(400).send(e);
    })
    res.send("Hello From Other side");
})
app.get("/find",(req,res)=>
{
    const Student = new Student(res);
    console.log(Student);
   //Student.find({}, (err, allBooks) => 
   //{
   //    if (err) console.error(err);
   //    res.render(allBooks);
   //    console.log(allBooks);
   //})
});
app.listen(port,()=>{
     console.log("Your are listern in 8k");
})
const Getdocument = async(s)=>
{
    try 
    {
      const result = await s.find();
      console.log(result);
    }
    catch(err){
        console.log(err);
    }

}
//Createdocument();
