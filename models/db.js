const config = require('./../config')
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
  databse: config.DATABASE.database,
  username: config.DATABASE.username,
  password: config.DATABASE.password,
  host: config.DATABASE.host,
  dialect: 'mysql'
})

module.exports = sequelize