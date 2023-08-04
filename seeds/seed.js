const sequelize = require('../config/connection');
const { User, Sleep } = require('../models');

const userData = require('./userData.json');
const sleepData = require('./sleepData-seeds.js');

const seedDatabase = async () => {
  await sequelize.sync({ force: true});

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  // for (const sleep of sleepData) {
  //   await Sleep.create({
  //     ...sleep,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // }

  process.exit(0);
};

seedDatabase();