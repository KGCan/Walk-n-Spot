const router = require('express').Router();
const { User, Animal, Trail, TrailAnimal } = require("../../models");


router.post('/cards', (req, res) => {
  // Access Trail model and run .findAll() method)
  // this already gives me an [] already is the response
   Trail.findAll({
    where: {
       city_name: req.body.city_input
    },
    attributes: ['id', 'trail_name', 'city_name', 'trail_img', 'trail_info'],
    include: [
     {
      model: Animal,
    	attributes: ['animal_name']
      }
    ]
    })
		.then((trailData) => {
      const trails = trailData.map((trail) => trail.get({ plain: true }));
  		console.log(trails)
    // res.render('homepage', { trails });
  })
  .catch((err) => {
    res.status(500).json(err);
  });
});



//example code
// router.get("/", (req, res) => {
//     Post.findAll({
//       include: [User],
//     })
//       .then((dbPostData) => {
//         const posts = dbPostData.map((post) => post.get({ plain: true }));
  
//         res.render("all-posts", { posts });
//       })
//       .catch((err) => {
//         res.status(500).json(err);
//       });
//   });



















    // .then(json => {
    //         var trailInfoArr = [];

    //         if (req.body.animal_input != "All") {

    //             //console.log(json[0])
    //             //console.log(json[1].animals[0].animal_name)
    //             console.log(animal_input)

    //             // Check for City match
    //             for (var i = 0; i < json.length; i++) {
    //                 console.log(json[i].city_name)


    //                 // Check for Animal match
    //                 for (var j = 0; j < json[i].animals.length; j++) {
    //                     // console.log(json[i].animals[j].animal_name)

    //                     if (json[i].city_name === city_input && json[i].animals[j].animal_name === animal_input) {

    //                         let trailImg = json[i].trail_img;
    //                         let trailName = json[i].trail_name;
    //                         let trailUrl = json[i].trail_info;

    //                         // Adding the trail "id" so it can be used to save
    //                         let trailID = json[i].id
    //                         // console.log('----------------------------------------Here is the sighting data------------------------------------');

    //                         var resultData = ({
    //                             trail_id: trailID,
    //                             trail_img: trailImg,
    //                             trail_name: trailName,
    //                             trail_url: trailUrl
    //                         })
    //                         trailInfoArr.push(resultData);



