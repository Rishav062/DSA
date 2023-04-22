const data = require('./data')
const httpv = require('http');
httpv.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"application/json"});
    res.write(JSON.stringify(data));
    res.end();
}).listen(8080);

// console.log("hello,world");
// const fs= require('fs');
// const input = process.argv;
// fs.unlinkSync("text.txt");


const fs = require('fs')
const path = require('path');
const filePath = path.join(__dirname,'/files')
// for(var i=0;i<5;i++){
//     fs.writeFileSync(filePath+`/demo${i}`,'yes file is created')
// }

// fs.readdir(filePath,(err,roy)=>{
//     roy.forEach((items) => {
//         console.log(items);
//     });
// });
