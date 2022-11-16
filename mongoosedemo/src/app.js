const { default: mongoose } = require("mongoose"); 
//connetion creation
mongoose.connect("mongodb://localhost:27017/mynew").
then(()=>console.log("Connection Successfuly..........")).
catch((err)=>console.log(err));


const playerSchema= new mongoose.Schema({

name:
{
    type:String,
    required : true
},
    age:Number
});
const Playlist = new mongoose.model("vivekcolle",playerSchema);


const Createdocument =  async()=>{

try 
{
    const Playlistnew = new Playlist({
        name:"rahul",
        age:24
    });
    const vivekplaylist = new Playlist({
        name:"vivek",
        age:22
    });
   const result = await Playlist.insertMany([Playlistnew,vivekplaylist]);
   console.log(result);
}
catch(err) 
{
    console.log(err);
}}

const Getdocument= async()=>
{
    try 
    {
      const result = await Playlist.find({age:22})
      .select({name:1})
      .limit(1);
      console.log(result);
    }
    catch(err){
        console.log(err);
    }

}
//Createdocument();
Getdocument();