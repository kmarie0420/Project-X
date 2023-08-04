const router = require('express').Router();
const { Sleep, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const sleepData = await Sleep.findAll({
      include: [
        {
          model: Sleep,
          attributes: ['id', 'sleepDuration', 'wakeUpCount', 'heartRate', 'heartRateVariability', 'respiration', 'snoring', 'timeSleeping', 'sleepInterruptions', 'bodyTemperature'],
        },
      ],
    });

    const sleep = sleepData.map((sleep) => sleep.get({ plain: true }));
    res.render('homepage', {
      sleep,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

module.exports = router;