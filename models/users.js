const sequelize = require('../config');
const { DataTypes } = require('sequelize');


const User = sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    },
    unique: true
  },
  password: DataTypes.STRING
});

User.sync();


module.exports = User;