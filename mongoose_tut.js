const mongoose=require("mongoose");
mongoose.set('strictQuery', false);

mongoose.connect("mongodb://localhost:27017/checking");
const studschema=new mongoose.Schema({
    name:String,
    age:Number,
    categ:String
});

const insertion= async ()=>{
    const students=mongoose.model("students",studschema);
    let data=new students({name:786,age:23});
    let result=await data.save();
    console.log(result);
}

const updation=async ()=>{
    const students=mongoose.model("students",studschema);
    let result=await students.updateOne({name:"786"},{$set : {name:"updated"}});
    console.log(result);
}

const deletion=async ()=>{
    const students=mongoose.model("students",studschema);
    let result=await students.deleteOne({name:"56"});
    console.log(result);
}

const finding=async ()=>{
    const students=mongoose.model("students",studschema);
    let result=await students.find({name:"prabhat"});
    console.log(result);
}

