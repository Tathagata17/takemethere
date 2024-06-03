const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/takemethere")
.then((res)=>{console.log("connected");})
.catch((err)=>{console.log("some error in connection");})

const urlschema = new mongoose.Schema({

    email:String,
    url: String,
    text:String
});

module.exports=mongoose.model("urldata",urlschema);