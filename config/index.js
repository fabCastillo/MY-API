require('dotenv').config();

const config = {
    env: process.env.MODE_ENV || 'dev',
    port: process.env.PORT,
    dbHost: process.env.DB_HOST,
    dbPort: process.env.DB_PORT,
    dbName: process.env.DB_NAME,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD
}

module.exports = config;