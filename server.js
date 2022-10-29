const express = require("express");
const app=express();
app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs");
app.get("/",logger,logger,(req,res) =>{
    res.render("index",{text:"world"});
});

const usersRouter=require('./routes/users');

app.use('/users',usersRouter)
function logger(req,res,next){
    console.log(req.originalUrl);
    next();
}
app.listen(3000);
