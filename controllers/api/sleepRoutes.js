const router = require('express').Router();
const { Sleep } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', withAuth, async (req, res) => {
  try {
    const dbsleepData = await Sleep.findAll({
      where: {
        userId: req.session.userId 
      },
      attributes: ['id', 'name', 'sleep_Duration', 'wakeup_Count', 'heart_Rate', 'heartrate_Variability', 'respiration', 'snoring', 'time_Sleeping', 'sleep_Interruptions', 'body_Temperature']
    })
    console.log("______________DATA_____________", req.session)

    const sleep = dbsleepData.map((sleep) => sleep.get({ plain: true }));
    
    res.json(sleep);
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
  try {
    const newSleep = await Sleep.create({
      ...req.body,
      userId: req.session.userId,
    });
    console.log("________________DATA________________")

    res.status(200).json(newSleep);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const dbSleepData = await Sleep.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!dbSleepData) {
      res.status(404).json({ message: 'No sleep found with this id' });
      return;
    }

    res.json(dbSleepData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;