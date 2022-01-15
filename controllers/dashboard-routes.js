const router = require('express').Router();
// const withAuth = require('../utils/auth');
const sequelize = require('../config/connection');
const { Trail } = require('../models');


router.get('/', (req, res) => {
  Trail.findAll({
    where: {
      // use the ID from the session
      user_id: req.session.user_id
    },
    attributes: [
      'id',
      'trail_name',
      'city_name',
      'created_at',
    ],
  })
    .then(dbPostData => {
      // serialize data before passing to template
      const trails = dbPostData.map(trail => trail.get({ plain: true }));
      res.render('dashboard', { trails, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;