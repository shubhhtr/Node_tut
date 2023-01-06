const multer=require("multer");
const express=require("express");

const app=express();

const upload=multer({
    storage: multer.diskStorage({
        destination: (req,file,cb)=>{
            cb(null,"dummy");
        },
        filename: (req,file,cb)=>{
            cb(null,file.fieldname+"_"+Date.now()+".jpg");
        }
    })
}).single("dummy_file");
console.log(upload);

app.post("/",upload,(req,resp)=>{
    resp.send("File Uploaded");
});
app.listen(5000);

