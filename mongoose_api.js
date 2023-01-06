const express=require("express");
const app=express();
const students=require("./mongoose_tut");

app.use(express.json());

app.post("/",async (req,resp)=>{
    let data=new students(req.body);
    data.save();
    console.log(req.body);
    resp.send("working");
});

app.get("/",async (req,resp)=>{
    let result=await students.find();
    resp.send(result);
});

app.delete("/:_id",async (req,resp)=>{
    let result=await students.deleteOne(req.params);
    console.log(result);
    if(result.deletedCount>0) resp.send("deleted");
});

app.put("/:name",async (req,resp)=>{
    let result=await students.updateOne(
        req.params,
        {$set:req.body}
    );
    resp.send(result);
    console.log(result);
});

app.listen(5000);
