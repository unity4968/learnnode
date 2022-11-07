var express = require("express");
var app = express();

app.get("/",(req,res)=>
{
    res.send("Helo my self Rahul  patel");
});
app.get("/about",(req,res)=>
{
    res.send("Helo its your about page ");
});
app.listen(8000,()=>
{
    console.log("App listern in port no 8000");
});

