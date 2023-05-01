const dbConnection = require('./mongodb');
const express = require('express');
const app = express();
app.use(express.json());

// app.get('',async (req,res)=>{
//     let db =await dbConnection();
//     let getData =await db.find().toArray();
//     res.send(getData);
// })
// app.post('/',async (req,res)=>{
//     let db =await dbConnection();
//     let postData =await db.insertOne(req.body);
//     res.send(postData)
// });
app.put('/',async (req,res)=>{
    let db =await dbConnection();
    let putData =await db.updateOne({"name":"req.body"},{$set:{"name":req.body}});
    res.send(putData)
});
let port = 8080;
app.listen(port,console.log("Your server is running on",port))