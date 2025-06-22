const { MongoClient} = require('mongodb');

const uri = "mongodb://mongo_fs_user:mongo_fs_pw@localhost:27017/mongo_fullstack_db?authSource=admin";
const client = new MongoClient(uri);


async function getMongoDB() {
  await client.connect(); // Verbindung zur Datenbank aufbauen
  return client.db('mongo_fullstack_db');
}

module.exports = { getMongoDB };
