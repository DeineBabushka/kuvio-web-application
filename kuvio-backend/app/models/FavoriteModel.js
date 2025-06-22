// app/models/FavoriteModel.js
const { getMongoDB } = require('../database/mongodb');
const { ObjectId } = require('mongodb');

/**
 * Fügt ein Rezept zur Favoritenliste eines Users hinzu.
 * Die userID ist die ID aus MariaDB, gespeichert als String.
 */
async function addFavoriteToUser(userId, recipeId) {
  const db = await getMongoDB();
  return db.collection('user').updateOne(
    { userID: userId }, // Suche nach Mongo-User mit dieser MariaDB-ID
    { $addToSet: { favorites: new ObjectId(recipeId) } }, // kein Duplikat
    { upsert: true } // Erstellt Dokument, falls nicht vorhanden
  );
}

/**
 * Holt alle favorisierten Rezepte eines Users aus der Rezepte-Collection.
 */
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

/**
 * Entfernt ein Rezept aus den Favoriten des Users.
 */
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
