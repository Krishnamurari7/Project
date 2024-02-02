const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/crud-app';

// Connect to MongoDB
MongoClient.connect(mongoURI, (err, client) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  console.log('Connected to MongoDB');

  const db = client.db('crud-app');
  const usersCollection = db.collection('users');

  // Express routes
  app.get('/', async (req, res) => {
    const users = await usersCollection.find().toArray();
    res.render('index', { users });
  });

  app.post('/addUser', async (req, res) => {
    const { name, age } = req.body;
    await usersCollection.insertOne({ name, age: parseInt(age) });
    res.redirect('/');
  });

  app.get('/deleteUser/:id', async (req, res) => {
    const userId = req.params.id;
    await usersCollection.deleteOne({ _id: ObjectId(userId) });
    res.redirect('/');
  });

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
});
