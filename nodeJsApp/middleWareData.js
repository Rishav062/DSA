const path = require("path")
const filePath = path.join(__dirname,"public")
module.exports  = (req,res,next) =>{
    if(!req.query.age){
      res.send("Tell me your age")
    }
    else if(req.query.age >= 18){
      // res.sendFile(`${filePath}/error.html`)
      next()
    }
    else{
      res.send(`<h2 style="display:flex;justify-content:center;background-color:red;color:white;width:100%;height:auto;margin:0;">You are not eligible</h2>`)
    }
  }