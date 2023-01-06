const express=require("express");
const EventEmitter=require("events");

const app=express();

let count=0;
const event=new EventEmitter();

event.on("countevent", ()=>{ //Exicuted when the event.emit() with "countevent" is called
    count++;
    console.log("event called "+count);
});

app.get("/",(req,resp)=>{
    resp.send("called");
    event.emit("countevent"); //Works same as button, everytime this will be called then the event on function will go
});
app.listen(5000);