const { MongoClient } = require("mongodb")
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
async function dbConnection(){
    let result = await client.connect();
    let dbName = result.db("myFirstdb");
    return dbName.collection("students");
}
module.exports = dbConnection;