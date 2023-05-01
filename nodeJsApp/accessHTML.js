const express = require('express')
const app = express();
const path = require('path');
const data = require('./data');
let filePath = path.join(__dirname,"/public")
// app.use(express.static(filePath))

// for dynamic website we use view engine:Start
app.set('view engine','ejs')
app.get('/profile',(req,res) =>{
    res.render('profile',{data})
})
// for dynamic website we use view engine:Last
app.get('',(req,res)=>{
    res.sendFile(`${filePath}/index.html`)
})
app.get('/about',(req,res)=>{
    res.sendFile(`${filePath}/about.html`)
})
app.get('*',(req,res)=>{
    res.sendFile(`${filePath}/error.html`)
})
app.listen(8080)