const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../config/db');
const Todo = require('./Todo');


const User = sequelize.define('user', {
  name: {
    type: DataTypes.STRING,
    // allowNull: false
  },
  email: DataTypes.STRING,
  birth_date: DataTypes.DATE,
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: sequelize.literal("NOW()")
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: sequelize.literal("NOW()")
  },
}, {
  underscored: true,
  timestamps: false
})

User.hasMany(Todo);

module.exports = User