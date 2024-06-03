const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/takemethere")
.then((response)=>{console.log("database connected");})
.catch((err)=>{ console.log("it seems there is some error ",err);})

const userschema =new mongoose.Schema({

    Firstname:String,
    email:String,
    password:String,
    urls:[{
        url:String,
        text:String,
    }],
});

const userinfo = mongoose.model("userinfo",userschema);

module.exports = userinfo;
