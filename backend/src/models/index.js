const { Sequelize } = require('sequelize');
const config = require('../config/db.config').development;

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  port: config.port,
  dialect: config.dialect,
  logging: false
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Note = require('./note.model')(sequelize, Sequelize);

module.exports = db;
