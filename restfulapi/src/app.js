const express= require('express');
const app = express();

const port = process.env.PORT || 8000;

app.get("/",(req,res)=>
{
    res.send("hello from the other side thapa");
})
app.post("/students",(req,res)=>
{
    res.send("Hello From Other side");
})
app.listen(port,()=>{
     console.log("Your are listern in 8k");
})