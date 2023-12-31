const router = require('express').Router();
const { User } = require('../../models');


router.get("/", async(req, res) => {
  try {
    const data = await User.findAll()
   
    res.status(200).json(data)
  } catch(err) {
    console.log(err)
  }
})


router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      name: req.body.name,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.userId = dbUserData.id
      req.session.loggedIn = true;
      req.session.name = dbUserData.name;
      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        name: req.body.name,
      },
    });
    console.log(res.session)

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.name = dbUserData.name;
      res.status(200).json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;