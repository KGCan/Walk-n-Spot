const router = require('express').Router();
// const withAuth = require('../utils/auth');
const sequelize = require('../config/connection');
const { User, Trail } = require('../models');


router.get('/', (req, res) => {
    console.log(req.session);
    User.findAll({
        where: {
            id: req.session.user_id
        },

        attributes: { exclude: ['password'] },
        include: [
          // {
          //   model: Animal,
          //   attributes: ['animal_name']
          // },
          {
            model: Trail,
            attributes: [['id', 'trail_id'], 'trail_name', 'animal_id'],
    
            through: {
              attributes: [],
            },
          },
        ]

    })
        .then(trailData => {

            const trails = trailData.map(trail => trail.get({ plain: true }));
  
            if (trailData[0].dataValues.trails[0]== null) {
                console.log(trailData)
            } else {
                console.log(trailData[0].dataValues.trails[0].trail_name)

            }

            res.render('dashboard', {
                trails,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;