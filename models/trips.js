module.exports = function(sequelize, DataTypes) {
  const Trip = sequelize.define("Trip", {
    name: DataTypes.STRING,
    notes: DataTypes.STRING(3500)
  });

  Trip.associate = function(models) {
    Trip.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Trip;
};
