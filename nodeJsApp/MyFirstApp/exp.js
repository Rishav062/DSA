const express = require('express');
const dbConnection = require('../mongodb')
const path = require('path');
const { log } = require('console');
const filePath = path.join(__dirname,'../public');

const app = express(filePath);
app.use(express.urlencoded({extended:true}))
const PORT = process.env.PORT || 3000;
let inpEmail;
app.get('/',async(req,res)=>{
   res.sendFile(`${filePath}/signup.html`)
});
app.get('/login',async(req,res)=>{
   res.sendFile(`${filePath}/index.html`)
});
app.post('/dashboard',async (req,res)=>{
   let db = await dbConnection();
   let getData =await db.find().toArray();
    let element = getData.map(el=>{
      inpEmail = el.email;
      inpPassword = el.password
   });
   let Email = req.body.email;
   let password = req.body.password;
   if(inpEmail === Email && inpPassword === password){
      res.sendFile(`${filePath}/access.html`);
   }
   else{
      console.log(inpEmail,Email,inpPassword,password);
      res.sendFile(`${filePath}/error.html`);
      // let putData =await db.insertOne({"email":Email,"password":password});
   }
});
app.get('/signup/getData',async (req,res)=>{
    let db = await dbConnection();
    let getData =await db.find().toArray();
    res.send(getData)
 });
app.listen(PORT,(err)=>{
   !err ? console.log('Your server is running on port',PORT)  : '';
});




