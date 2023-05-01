const express = require('express');
const app = express();
const middlewareRqt = require("./middleWareData")
const path = require('path');
let filePath = path.join(__dirname,"/public");
app.use(middlewareRqt)

// let middlewareRqt = (req,res,next) =>{
//   if(!req.query.age){
//     res.send(`<h2 style="display:flex;justify-content:center;">Please provide age</h2>`)
//   }
//   else if(req.query.age >= 18){
//     next()
//   }
//   else{
//     res.send(`<h2 style="display:flex;justify-content:center;background-color:red;color:white;width:100%;height:auto;margin:0;">You are not eligible</h2>`)
//   }
// }
// app.use(middlewareRqt);
app.get('',(req,res)=>{
    res.sendFile(`${filePath}/access.html`)
});
app.get('/error',(req,res)=>{
    res.sendFile(`${filePath}/error.html`)
});
app.listen(8080)