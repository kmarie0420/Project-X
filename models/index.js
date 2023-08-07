
const Sleep = require('./Sleep');
const User = require('./User')


User.hasMany(Sleep, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Sleep.belongsTo(User, {
  foreignKey: 'sleep'
})

module.exports = { User, Sleep };
