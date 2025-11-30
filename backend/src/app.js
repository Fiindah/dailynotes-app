const express = require('express');
const cors = require('cors');
const bodyParser = require('express').json;
const noteRoutes = require('./routes/note.routes');
const db = require('./models');

const app = express();
app.use(cors());
app.use(bodyParser());

app.get('/', (req, res) => res.send('DailyNotes API'));
app.use('/notes', noteRoutes);

// Sync DB
async function initDb() {
  try {
    await db.sequelize.sync();
    console.log('DB synced');
  } catch (err) {
    console.error('DB sync error', err);
  }
}
initDb();

module.exports = app;
