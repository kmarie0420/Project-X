const router = require('express').Router();
const {} = require();

// findAll
router.get('/', (req, res) => {})

.catch(err => {
    console.log(err);
    res.status().json(err);
  });

// findOne
router.get('/:id', (req, res) => {})

.catch(err => {
    console.log(err);
    res.status().json(err);
  });

router.post('/', (req, res) => {})

.catch(err => {
    console.log(err);
    res.status().json(err);
  });

router.put('/:id', (req, res) => {})

.catch(err => {
    console.log(err);
    res.status().json(err);
  });

router.delete('/:id', (req, res) => {})

.catch(err => {
    console.log(err);
    res.status().json(err);
  });

module.exports = router;
