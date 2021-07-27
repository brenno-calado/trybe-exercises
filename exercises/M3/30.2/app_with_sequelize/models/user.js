const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_num: Datatypes.INTEGER,
  });

  return User;
};

module.exports = User;
