
const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Trail, Animal, TrailAnimal, UserTrail } = require('../models');

router.get('/', (req, res) => {
    console.log(req.session);
    User.findAll({
        where: {
            id: req.session.user_id
        },
        attributes: { exclude: ['password'] },
        include: [
          {
            model: Trail,
            include: {
                model: Animal,
            },    
            through: {
              attributes: [],
            },
          },
        ],
        
    })
        .then(trailData => {
            var trailArray=[]
            if (trailData[0].dataValues.trails[0]== null) {
                // console.log(trailData)
            } else {
                for (i=0; i<trailData[0].dataValues.trails.length; i++) {
                    console.log('----------------------------------------Here is the my data------------------------------------');
                    // console.log(trailData[0].dataValues.trails[i]);

                    var animal_sighting = [];

                    for(var j = 0; j < trailData[0].dataValues.trails[i].animals.length; j++) {
                        animal_sighting.push(trailData[0].dataValues.trails[i].animals[j].trail_animal.sighting + " people spotted " + trailData[0].dataValues.trails[i].animals[j].animal_name);
                    }
                    const trail = {
                        user_id: trailData[0].dataValues.id,
                        trails: trailData[0].dataValues.trails[i].trail_name,
                        trail_id: trailData[0].dataValues.trails[i].id,
                        trail_img: trailData[0].dataValues.trails[i].trail_img,
                        trail_info: trailData[0].dataValues.trails[i].trail_info,
                        sighting: animal_sighting
                    }

                    trailArray.push(trail)
                }
            }
            console.log(trailArray);
            res.render('dashboard', {
                trailArray,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;

