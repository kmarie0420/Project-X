const router = require('express').Router();
const apiRoutes = require('./api');
const sleepRoutes = require('./sleepRoutes');


router.use('/', sleepRoutes);
router.use('/api', apiRoutes);

module.exports = router;