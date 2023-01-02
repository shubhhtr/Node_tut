const express=require('express');
const app=express();

app.get('',(req,res)=>{
    res.send('home page welcome welcome welcome');
})
app.get('/about',(req,res)=>{
    res.send('about page');
})
app.get('/help',(req,res)=>{
    res.send('help page');
})

app.listen(5000);