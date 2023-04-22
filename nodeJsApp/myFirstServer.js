// first create the file in fs(file system):
const { isUtf8 } = require('buffer');
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname,'/crud');
const fileCreated = `${filePath}/index.txt`;
console.log(filePath);
fs.writeFileSync(fileCreated,"yes your file is created");

//Now read it with the help of readFile in fs:

fs.readFile(fileCreated,"Utf8",(err,item)=>{
    console.log(item);
})

// Now update that file which we created.

fs.appendFile(fileCreated,'and file name is index.txt',(err)=>{
    if(!err){
        console.log("Your file is updated!!");
    }
})

// Rename the file in fs :

const newFile = `${filePath}/apple.txt`;
fs.rename(fileCreated,newFile,(err)=>{
    if(!err){
        console.log("Your file is successfully renamed");
    }
})

// Deletion in file system:

// fs.unlinkSync(newFile)