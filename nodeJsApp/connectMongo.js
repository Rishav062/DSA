const dbConnection = require('./mongodb')
// dbConnection().then((resp)=>{
//     resp.find().toArray().then((item)=>{
//         console.log(item);
//     });
// });

const main = async ()=>{
    let data = await dbConnection();
    // let insertData = await data.insertMany([{"name":"Ali baba"},{"name":"God father"},{"name":"death Gun"}])
    // let updateData = await data.updateOne({"name":"God father"},{$set:{"name":"god Father"}});
    // let delData = await data.deleteMany([{"name":"God father"},{"name":"death Gun"},{"name":"Ali baba"}])
    let readData = await data.find().toArray();
    console.warn(readData);
}
main();

