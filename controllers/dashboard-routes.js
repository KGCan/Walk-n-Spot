
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
                        trail_info: trailData[0].dataValues.trails[i].trail_info,
                    }

                    Trail.findAll({
                        where: {
                            id: trailData[0].dataValues.trails[i].id
                        },
                        include: [
                          {
                            model: Animal,
                            attributes: ['animal_name']
                    
                          }
                        ]
        
                    }).then(userData => {
                        console.log('----------------------------------------Here is the trail data------------------------------------');
                        console.log(userData);
                        
                        trail.sighting = userData[0].dataValues.animals[0].trail_animal.sighting + " people spotted " + userData[0].dataValues.animals[0].animal_name  + "\n";

                        for(var j = 1; j < userData[0].dataValues.animals.length; j++) {
                            trail.sighting += userData[0].dataValues.animals[j].trail_animal.sighting + " people spotted " + userData[0].dataValues.animals[j].animal_name  + "\n";
                        }
                    })
                    // Possible alternative add in the code below 

                    // trail.sightingNone = userData[0].dataValues.animals[null] + " No animals matching your search have been sighted ";

                    // for(var j = 0; j < userData[0].dataValues.animals.length; j++) {
                    //     trail.sightingNone += userData[0].dataValues.animals[j] + " No animals matching your search have been sighted " + userData[0].dataValues.animals[j].animal_name  + "\n";
                    //}
                    
                      // if (trail.sighting == null) {
                      //console.log(trailData)
                      // } else if (trail.sighting = userData[0].dataValues.animals[0].trail_animal.sighting + " people spotted " + userData[0].dataValues.animals[0].animal_name  + "\n")}
                      // } else (var j = 1; j < userData[0].dataValues.animals.length; j++) {
                      //     trail.sighting += userData[0].dataValues.animals[j].trail_animal.sighting + " people spotted " + userData[0].dataValues.animals[j].animal_name  + "\n";
                        // }


                    // Possible alternative option to above changed j = 0 vs j = 1 in for loop ?? I doubt it's that simple...

                    // .then(userData => {
                    //     console.log('----------------------------------------Here is the trail data------------------------------------');
                    //     console.log(userData);

                    //     trail.sighting = userData[0].dataValues.animals[0].trail_animal.sighting + " people spotted " + userData[0].dataValues.animals[0].animal_name  + "\n";

                    //     for(var j = 0; j < userData[0].dataValues.animals.length; j++) {
                    //         trail.sighting += userData[0].dataValues.animals[j].trail_animal.sighting + " people spotted " + userData[0].dataValues.animals[j].animal_name  + "\n";
                    //     }
                        
                    // })


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



module.exports = router;

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