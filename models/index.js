
const Sleep = require('./Sleep');
const User = require('./User')


User.hasMany(Sleep, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});


module.exports = { User, Sleep };
