require("dotenv").config()
const {Sequelize} = require('sequelize');

const host = process.env.DATABASE_HOST || "localhost"

const sequelize = new Sequelize({
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  dialect: "mysql",
  host: host,
})

module.exports = sequelize