const sequelize = require('../config/connection');
const { User, Sleep } = require('../models');

const userData = require('./userData-seeds.json');
const sleepData = require('./sleepData-seeds.js');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });


  process.exit(0);
};

seedDatabase();