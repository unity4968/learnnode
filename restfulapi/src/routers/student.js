const express = require('express');
const app = express();
const router = new express.Router();


router.get("/",(req,res)=>
{
    res.send("hello from the other side vvvv");
})
// router.post("/students",(req,res)=>
// {
//    // console.log(req.body);
//    // const obj = JSON.stringify(req.body);
//    // console.log(obj);
//     const user = new Student(req.body);
//     user.save().then(()=>{
//         res.status(201).send(user);
//     }).catch((e)=>{
//         res.status(400).send(e);
//     })
//     res.send("Hello From Other side");
// })


router.post("/students",async (req,res)=>
{
    try
    {
        const user = new Student(req.body); 
        const createuser = await user.save();
        res.status(201).send(createuser);}
    catch(e){  res.status(400).send(e);}

})
router.get("/students",async (req,res)=>{

    try {
        const res = await Student.find();
        res.send(res);
    }
    catch(e){
        res.send(e);
    }
})
// find particular by id
router.get("/students/:id",async (req,res)=>{

    try {
        const _id = req.params.id;
        const studentData = await Student.findById(_id);
        console.log(studentData);
        if(!studentData){
            return res.status(404).send();
        } 
        else
        {
            res.send(studentData);
        }
    }
    catch(e){
        res.send(e);
    }
})
router.get("/find",(req,res)=>
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

// update the data into database

router.patch("/students/:id",async (req,res)=>
{
    try
    {
        const _id = req.params.id;
    const updateStudents =    Student.findByIdAndUpdate(_id,res.body,{
        new:true
    });
    res.send(updateStudents);

    }catch(e){
        res.status(400).send(updateStudents);
    }
}) 


module.exports=router;