const {MongoClient}=require("mongodb");
const dburl="mongodb://localhost:27017";
const client=new MongoClient(dburl);

const dbConnect= async ()=>{
    let result=await client.connect();
    let datab=result.db("checking");
    return datab.collection("stud_rec");
}

//Read

// const reading=async ()=>{
//     const data=await dbConnect();
//     const result=await data.find({}).toArray();
//     console.warn(result);
// }
// reading();

//Insertion

// const inserting=async (x)=>{
//     const data=await dbConnect();
//     const result=await data.insertMany(x);
//     if(result.acknowledged) console.warn("data inserted");
// }
// inserting([{name:"prakhar",age:23,categ:"perfect baccha"},{name:"shanu",age:23,categ:"tech_mahindra"},{name:"rishabh",age:23,categ:"ias"}]);

//Deletion

// const deleting=async (x)=>{
//     const data=await dbConnect();
//     const result=await data.deleteOne(x); //deleteMany() for deleting all the data with given conditions
//     if(result.acknowledged) console.log("data deleted");
// }
// deleting({name:"anshu"});

//Updation

// const updatedata=async (x,y)=>{
//     const data=await dbConnect();
//     const result=await data.updateOne(x,y);
//     if(result.acknowledged) console.log("updated");
// }
// updatedata({name:"anshu"},{$set:{name:"anshuman",age:35}});
// updatedata({name:"prabhat"},{$set:{categ:"cool boy prabhar patel"}});

module.exports=dbConnect;