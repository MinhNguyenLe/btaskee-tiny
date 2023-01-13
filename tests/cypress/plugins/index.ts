const {MongoClient} = require("mongodb")

async function queryTestDb() {
  const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'test';
const db = client.db(dbName);

  const collection = db.collection('services');

 const test =  await collection.find();
 client.close();
 return test;
}

module.exports = (on) => {
  on("task", {
    queryDb: () => {
      return queryTestDb();
    }
  });
};