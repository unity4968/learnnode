var express = require("express");
var path = require("path");
var app = express();

//built in middlewere

const staticpath = path.join(__dirname,"../public");
app.set("view engine", "hbs");
 //console.log(staticpath);
 //app.use(express.static(staticpath));
app.get("/",(req,res)=>
{
    res.send("index");
    res.render("index");
});
// app.get("/",(req,res)=>
// {
//     res.send("Helo my self Rahul  patel");
// });

app.get("/about",(req,res)=>
{
    res.send("Helo its your about page ");
});
app.listen(8000,()=>
{
    console.log("App listern in port no 8000");
});

