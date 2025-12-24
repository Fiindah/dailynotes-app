const { Sequelize } = require('sequelize');
const config = require('../config/db.config');

// Deteksi environment
const isProduction = !!process.env.DATABASE_URL;

let sequelize;

if (isProduction) {
  // === RENDER / PRODUCTION ===
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  });
} else {
  // === LOCAL DEVELOPMENT ===
  const env = process.env.NODE_ENV || 'development';
  const dbConfig = config[env];

  sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    {
      host: dbConfig.host,
      port: dbConfig.port,
      dialect: dbConfig.dialect,
      logging: false,
    }
  );
}

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Note = require('./note.model')(sequelize, Sequelize);

module.exports = db;
