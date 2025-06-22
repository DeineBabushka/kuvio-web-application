const { MongoClient} = require('mongodb');
require('dotenv').config();

const uri = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:27017/${process.env.MONGO_DATABASE}?authSource=admin`
const client = new MongoClient(uri);


async function getMongoDB() {
  await client.connect(); // Verbindung zur Datenbank aufbauen
  return client.db(`${process.env.MONGO_DATABASE}`);
}

module.exports = { getMongoDB };
