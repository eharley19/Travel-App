const sequelize = require('../config');
const { DataTypes } = require('sequelize');
const User = require('./users');

const Trip = sequelize.define('Trip', {
    name: DataTypes.STRING,
    notes: DataTypes.BLOB

});

Trip.belongsTo(User, {
    foreignKey: {
        allowNull: false
    }
});

Trip.sync();

module.exports = Trip;

