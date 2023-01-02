const express=require('express');
const app=express();


app.set('view engine','ejs');

app.get('',(_,resp)=>{
    const data={
        name:'Amit',
        email:'am@xyz',
        skills:['c++','java',"php","bla bla bla"]
    }
    resp.render('test',{data});
});
app.listen(4000);