const router = require('express').Router();
const { User, Animal, Trail, TrailAnimal } = require('../../models')



router.get('/cards', (req, res) => {
  // Access Trail model and run .findAll() method)
  // this already gives me an [] already is the response
  // let req.body.city_name = 'Sacramento';

  Trail.findAll({
    where: {
      // city_name: req.body.city_input
      city_name: 'SACRAMENTO'
    },
    attributes: ['id', 'trail_name', 'city_name', 'trail_img', 'trail_info'],
    include: [
      {
        model: Animal,
        attributes: ['animal_name']
      }
    ]
  })
    .then((trails) => {
      // const trails = trailData.map((trail) => trail.get({ plain: true }));
      console.log(trails)
      // res.render('homepage', { trails });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;