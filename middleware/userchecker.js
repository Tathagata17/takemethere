const user=require("../model/user");

const isuser= async(req,res,next)=>{
    try
    {
    getuser= await user.findOne({email:req.body.email});
    if(getuser==null)
        {
            next();
        }
        else
        {
            //res.status(200).send("existing user");   
            res.redirect("/login");
        }
    }
    catch(err)
    {
        res.status(500).send("Internal server error");
    }
}

module.exports=isuser;