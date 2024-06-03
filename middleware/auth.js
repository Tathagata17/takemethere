const jwt=require("jsonwebtoken");
require("dotenv").config();

const tokengenaration=(email)=>{
try{
   const token =jwt.sign({email:email},process.env.secretkey,{expiresIn:"1d"});
   return token;
}
catch(err)
{
    return err;
}   
};

const verifytoken= (req,res,next)=>
    {
        try
        {
            const token=req.cookies.token;
            if(!token)
                {
                    res.redirect("/login");
                }
                else
                {
                  jwt.verify(token,process.env.secretkey,(err,user)=>{
                if(err)
                    {
                        res.redirect("/login");
                    }
                    req.user=user.email;
                    next();
            });
        }
        }
        catch(err)
        {
            res.status(500).send("Internal server error here");
        }
    }


module.exports={tokengenaration,verifytoken};