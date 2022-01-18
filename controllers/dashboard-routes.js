const router = require('express').Router();
// const withAuth = require('../utils/auth');
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
        //   {
        //     model: Animal,
        //     attributes: ['animal_name']
        //   },
          {
            model: Trail,    
            through: {
              attributes: [],
            },
          },
        ]
    })
        .then(trailData => {
            Trail.findAll({

            }).then(userData => {
                console.log('Here is the trail data')
                // console.log(userData)
                
            })
            var trailArray=[]
            // const trails = trailData.map(trail => trail.get({ plain: true }));
            if (trailData[0].dataValues.trails[0]== null) {
                console.log(trailData)
            } else {
                for (i=0; i<trailData[0].dataValues.trails.length; i++) {
                    console.log(trailData[0].dataValues.trails[i].trail_name)
                    const trail = {
                        trails: trailData[0].dataValues.trails[i].trail_name,
                        trail_img: trailData[0].dataValues.trails[i].trail_img,
                        alltrails: trailData[0].dataValues.trails[i].alltrails,
                    }
                    // id: "", username: "", email: "", trails
                    trailArray.push(trail)
                }
            }
            console.log(trailArray);
            // console.log(trailData)
            // console.log(trail)
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

// router.get('/', (req, res) => {
//     console.log(req.session);
//     Trail.findAll({
//         // where: {
//         //     id: req.session.user_id
//         // },
//         attributes: { exclude: ['password'] },
//         include: [
//           {
//             model: Animal,
//             attributes: ['animal_name']
//           },
//         // //   {
//         // //     model: Trail,    
//         // //     through: {
//         // //       attributes: [],
//         // //     },
//         // //   },
//         ]
//     })
//         .then(trailData => {
//             // var trailArray=[]
//             const trails = trailData.map(trail => trail.get({ plain: true }));
//             // if (trailData[0].dataValues.trails[0]== null) {
//             //     console.log(trailData)
//             // } else {
//             //     for (i=0; i<trailData[0].dataValues.trails.length; i++) {
//             //         console.log(trailData[0].dataValues.trails[i].trail_name)
//             //         const trail = {trails: trailData[0].dataValues.trails[i].trail_name}
//             //         // id: "", username: "", email: "", trails
//             //         trailArray.push(trail)
//             //     }
//             // }
//             // console.log(trailArray);
//             console.log(trailData)
//             // console.log(trail)
//             res.render('dashboard', {
//                 trails,
//                 loggedIn: req.session.loggedIn
//             });
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

module.exports = router;
