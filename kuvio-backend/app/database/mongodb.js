const { MongoClient} = require('mongodb');

const uri = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:27017/mongo_fullstack_db?authSource=admin`
const client = new MongoClient(uri);


async function getMongoDB() {
  await client.connect();
  return client.db('mongo_fullstack_db');
}

module.exports = { getMongoDB };
