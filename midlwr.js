const express=require("express");
const app=express();

const midwr=(req,resp,next)=>{
    if(!req.query.age) resp.send("provide your age please");
    else if(req.query.age < 18) resp.send("Welcome you are under age");
    else next();
}
//app.use(midwr);

app.get("",(req,resp)=>{
    resp.send("Home page");
});

app.get("/about",midwr,(req,resp)=>{
    resp.send("About page");
});

app.listen(3000);

