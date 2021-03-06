const config = require('../config/db.config')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        port: config.PORT,
        dialect: config.dialect,
        operationsAliases: false,
        pool: config.pool
    }
)

const db = {}

db.sequelize = sequelize
db.Sequelize = Sequelize

db.user = require('./user.model')(sequelize, Sequelize)

module.exports = db