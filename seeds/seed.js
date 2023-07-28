const { Sleep } = require('./models');

const seedDatabase = async () => {
  await Sleep.bulkCreate([
    {
      sleepDuration: 8,
      wakeUpCount: 2,
      heartRate: 60,
      heartRateVariability: 100,
      respiration: 15,
      snoring: false,
      timeSleeping: 8,
      sleepInterruptions: 0,
      bodyTemperature: 36.5
    },
    
  ]);
};

seedDatabase();