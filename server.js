const bodyParser = require("body-parser");
const express =require("express");
const cookieParser=require("cookie-parser");
require("dotenv").config();

const app=express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/signup",require("./routes/signup"));
app.use("/login",require("./routes/login"));
app.use("/home",require("./routes/home"));
app.use("/",require("./routes/parser"));
app.listen(3000,()=>
{
    console.log("server is running");
});
