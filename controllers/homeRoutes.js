const router = require('express').Router();
const { Sleep, User } = require('../models');
const withAuth = require('../utils/auth');

// findAll
router.get('/', async (req, res) => {
  try {
  const sleepData = await Sleep.findAll({
    include: [
      {
      model: sleep, 
      attributes: ['id', 'sleepDuration', 'wakeUpCount', 'heartRate', 'heartRateVariability', 'respiration', 'snoring', 'timeSleeping', 'sleepInterruptions', 'bodyTemperature'],
      }, 
  ],
});

const sleep = sleepData.map((sleep) => sleep.get({ plain: true }));
res.render('homepage', {
  sleep
});
  } catch (err) {
    res.status(500).json(err);
  }
  });



module.exports = router;
