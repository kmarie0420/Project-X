
const Sleep = require('./Sleep');
const User = require('./User')


User.hasMany(Sleep, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});


module.exports = { User, Sleep };
