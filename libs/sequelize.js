const { Sequelize } = require('sequelize');
const config = require('../config');
const setupModels = require('../db/index');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
    logging: true
});

setupModels(sequelize);
sequelize.sync();

module.exports = sequelize;