const express=require("express");
const {verifytoken}=require("../middleware/auth");
const urldata=require("../model/userurls");
const router=express();


router.get("/tmt/:text",verifytoken,async (req,res)=>{
    
    const data= await urldata.findOne({text:req.params.text,email:req.user});
    if(data==null)
        {
            res.status(200).json({info:"text was never created"});
        }
     else
     {
        console.log(data);
        res.status(200).json({url:data.url});
     }   
});

module.exports=router;
