const { getMongoDB } = require('../database/mongodb');
const { ObjectId } = require('mongodb');

async function addFavoriteToUser(userId, recipeId) {
  const db = await getMongoDB();
  return db.collection('user').updateOne(
    { userID: userId },
    { $addToSet: { favorites: new ObjectId(recipeId) } },
    { upsert: true }
  );
}

async function getFavoritesByUser(userId) {
  const db = await getMongoDB();

  const user = await db.collection('user').findOne(
    { userID: userId },
    { projection: { favorites: 1 } }
  );

  if (!user || !user.favorites) {
    return { message: [], code: 200 };
  }

  const recipes = await db.collection('recipes')
    .find({ _id: { $in: user.favorites.map(id => new ObjectId(id)) } })
    .toArray();

  return { message: recipes, code: 200 };
}

async function removeFavoriteFromUser(userId, recipeId) {
  const db = await getMongoDB();
  return db.collection('user').updateOne(
    { userID: userId },
    { $pull: { favorites: new ObjectId(recipeId) } }
  );
}

module.exports = {
  addFavoriteToUser,
  getFavoritesByUser,
  removeFavoriteFromUser
};
