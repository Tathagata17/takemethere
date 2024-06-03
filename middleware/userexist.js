const user =require("../model/user");

const userexist= async(req,res,next)=>{
    try
    {
    const userdata= await user.findOne({email:req.body.email});
    if(userdata!=null)
        {
           //res.status(200).send("user exist");
           next();
        }
        else
        {
            //res.status(404).send("user does not exist");
            res.redirect("/signup");
        }
     } catch(err)
        {
            res.status(500).send("Internal serever error");
        }
}
module.exports=userexist;