const router = require('express').Router();
const sleepRoutes = require('./sleepRoutes');

router.use('/sleep', sleepRoutes);

module.exports = router;
