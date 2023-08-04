const router = require('express').Router();
const { Sleep } = require('../../models');
const sleep = require('../../models/Sleep.js');
const withAuth = require('../../utils/auth');

// findAll
router.get('/', async (req, res) => {
  try {
  const dbsleepData = await Sleep.findAll({
    include: [
      {
      model: Sleep, 
      attributes: ['id', 'sleepDuration', 'wakeUpCount', 'heartRate', 'heartRateVariability', 'respiration', 'snoring', 'timeSleeping', 'sleepInterruptions', 'bodyTemperature'],
      }, 
  ],
});

const sleep = dbsleepData.map((sleep) => 
  sleep.get({ plain: true })
);
res.render('homepage', {
  sleep
});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  });



// // findOne
// router.get('/:id', (req, res) => {})

// .catch(err => {
//     console.log(err);
//     res.status().json(err);
//   });


router.post('/', withAuth, async (req, res) => {
  try {
    const newSleep = await Sleep.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newSleep);
  } catch (err) {
    res.status(400).json(err);
  }
});



// router.put('/:id', (req, res) => {})

// .catch(err => {
//     console.log(err);
//     res.status().json(err);
//   });



 // delete one product by its `id` value
  router.delete('/:id', (req, res) => {
    Sleep.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(dbSleepData => {
      if (!dbSleepData) {
        res.status(404).json({message: 'No sleep found with this id'});
        return;
      }
      res.json(dbSleepData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

module.exports = router;
