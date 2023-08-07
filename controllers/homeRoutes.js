const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  try {
    res.render('homepage', {
      logged_in: req.session.loggedIn
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/profile', withAuth, (req, res) => {
  res.render('profile', { name: req.session.name, logged_in: req.session.loggedIn });
});

module.exports = router;