const express=require("express");
const app=express();
const dbConnect=require("./mongo_curd");

app.use(express.json());

app.get("/", async (_,resp)=>{
    const data=await dbConnect();
    const result=await data.find().toArray();
    resp.send(result);
});

app.post("/", async (req,resp)=>{
    const data=await dbConnect();
    const temp=req.body;
    const result=await data.insertOne(temp);
    if(result.acknowledged) resp.send("Sucessfully inserted");
});

// app.put("/",async (req,resp)=>{
//     const data=await dbConnect();
//     const result=await data.updateOne({name:req.body.name},{$set: req.body});
//     resp.send(result);
// });

//If we want to update the same field || In this case if we want to change the 'name'
app.put("/:name",async (req,resp)=>{
    const data=await dbConnect();
    const result=await data.updateOne({name:req.params.name},{$set: req.body});
    resp.send(result);
});

app.delete("/:nme",async (req,resp)=>{
    const data=await dbConnect();
    const result=await data.deleteOne({name:req.params.nme});
    if(result.deletedCount >0) resp.send("Deleted");
});

app.listen(5000);

