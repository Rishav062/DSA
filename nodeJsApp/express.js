const express = require('express');
const data = require('./data')
const app = express();
app.get('',(req,res)=>{
    res.send(`
    <h1>Navigate to About page</h1>
    <a href="/about" style='text-decoration:none;border:1px solid grey'>About</a>
    `)
})
app.get('/about',(req,res)=>{
    // let body = req.query;
    // res.send(data)
   res.send(`<div style="display:flex;">
   <a href="../" style='text-decoration:none;border:1px solid grey'>Back</a>
   <a href="/about/help" style='text-decoration:none;border:1px solid grey'>Help</a>
   </div>`)
});
app.get('/about/help',(req,res)=>{
    // res.send('You are on the about page right now')
    let name = req.query.name;
    res.send(`
    <input type="text" value="${name}">
    <a href="/about" style='text-decoration:none;border:1px solid grey'>Help</a>
    `)
})

app.listen(8080)