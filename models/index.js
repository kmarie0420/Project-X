const Sleep = require("./Sleep");
const User = require("./User");

User.hasMany(Sleep, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Sleep.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Sleep };
