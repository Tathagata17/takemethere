const express=require("express");
const {verifytoken}=require("../middleware/auth");
const user=require("../model/user");
const urldata=require("../model/userurls");
const router =express.Router();

router.get("/",verifytoken,(req,res)=>{
    res.send("this is home");
});
router.post("/shorten",verifytoken,async(req,res)=>{
    const urlvalue=req.body.urlvalue;
    const textvalue=req.body.text;
    const check=await urldata.findOne({email:req.user,text:req.body.text});
    if(check==null)
    {
    const userurls=new urldata();
    userurls.email=req.user;
    userurls.url=urlvalue;
    userurls.text=textvalue;
    await userurls.save();
    res.status(200).json({info:"shorten created"});
    }
    else
    {
        res.status(404).json({info:"Text is already present"});
    }
});
router.get("/getuserdata",verifytoken,async(req,res)=>{
    const userdata=await urldata.find({email:req.user});
    res.status(200).json({userdata:userdata});
})

module.exports=router;