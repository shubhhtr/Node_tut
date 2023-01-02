const {MongoClient}=require('mongodb');
const dburl="mongodb://localhost:27017";
const client=new MongoClient(dburl);

async function getData(){
    let result=await client.connect();
    let datab=result.db('checking');
    let coll=datab.collection("testing");
    let finalData=await coll.find({}).toArray();
    console.log(finalData);
}

getData();