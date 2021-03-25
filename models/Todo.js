const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');

const Todo = sequelize.define('todo', {
  todo: {
    type: DataTypes.STRING,
    // allowNull: false
  },
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
  // userID: {
  //   type: DataTypes.INTEGER,
  // }
}, {
  underscored: true,
  timestamps: false
})


// User.belongsTo(Todo);

module.exports = Todo