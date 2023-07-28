const sequelize = require('../config/connection');
const SleepModel = require('./sleep');

const Sleep = SleepModel(sequelize, Sequelize);

sequelize.sync({ alter: true });

module.exports = {
  Sleep
};