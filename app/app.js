const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();

// Middleware – CORS & JSON
app.use(cors()); // ✅ CORS ganz oben
app.use(express.json());

// Routen einbinden
const favoriteRoutes = require('./routes/FavoriteRoute');
const userRoutes = require('./routes/UserRoute');
const authRoutes = require('./routes/AuthRoute');
const recipeRoutes = require('./routes/RecipeRoute');
const commentsRoutes = require('./routes/CommentsRoute');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/favorites', favoriteRoutes);
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/recipes', recipeRoutes);
app.use('/api/comments', commentsRoutes);

// MongoDB Verbindung testen 
const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function runMongo() {
  try {
    await client.connect();
    await client.db('mongo_fullstack_db').command({ ping: 1 });
    console.log('MongoDB Online!');
  } catch (err) {
    console.error('MongoDB Verbindung fehlgeschlagen:', err);
  } finally {
    await client.close();
  }
}

runMongo().catch(console.dir);

// Server starten
const PORT = 3000;
app.listen(PORT, () => console.log(`Server läuft auf Port ${PORT}`));
