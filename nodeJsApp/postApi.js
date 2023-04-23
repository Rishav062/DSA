const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
const filePath = path.join(__dirname,"/public")
app.get('',(req,res) =>{
   res.sendFile(`${filePath}/index.html`);
});
var file = '/access';

app.post(`${file}`,(req,res) =>{
   if(req.body.email === "super@admin.co" && req.body.password === "Test@123"){
      const {email,password} = req.body;
      res.sendFile(`${filePath}/access.html`)
   }
   else{
      res.sendFile(`${filePath}/accessDenied.html`)
   }
 });
app.listen(8080);
