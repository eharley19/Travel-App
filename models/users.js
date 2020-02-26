module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
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

  User.associate = function(models) {
    User.hasMany(models.Trip);
  };

  return User;
};
