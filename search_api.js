const express=require("express");
const app=express();
const students=require("./mongoose_tut");

app.use(express.json());

app.get("/:key",async (req,resp)=>{

    let data=await students.find({
        "$or":[
            {"name":{$regex:req.params.key}},
            {"categ":{$regex:req.params.key}}
        ]
    });

    console.log(req.params);
    resp.send(data);
});

app.listen(5000);