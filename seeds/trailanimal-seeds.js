const { TrailAnimal } = require('../models');

const TrailAnimalData = [
  {
    animal_id: 1, //Bat
    trail_id: 1,
    sighting: 5 //to tell how many animal was sighted in that trail
  },
  {
    animal_id: 1,
    trail_id: 4,
    sighting: 9 
  },
  {
    animal_id: 2, //Bear
    trail_id: 1,
    sighting: 2
  },
  {
    animal_id: 3, //Beaver
    trail_id: 2,
    sighting: 5
  },
  {
    animal_id: 3,
    trail_id: 3,
    sighting: 9
  },
  {
    animal_id: 3,
    trail_id: 5,
    sighting: 7
  },
  {
    animal_id: 4, //Blue Herring
    trail_id: 1,
    sighting: 19
  },
  {
    animal_id: 4,
    trail_id: 2,
    sighting: 30
  },
  {
    animal_id: 4,
    trail_id: 3,
    sighting: 20
  },
  {
    animal_id: 4, 
    trail_id: 4,
    sighting: 25
  },
  {
    animal_id: 5, //Bluejay
    trail_id: 2,
    sighting: 16
  },
  {
    animal_id: 5, 
    trail_id: 3,
    sighting: 23
  },
  {
    animal_id: 5, 
    trail_id: 5,
    sighting: 8
  },
  {
    animal_id: 6, //Bobcat
    trail_id: 5,
    sighting: 2
  },
  {
    animal_id: 7, //Cow
    trail_id: 4,
    sighting: 18
  },
  {
    animal_id: 8, //Coyote
    trail_id: 4,
    sighting: 28
  },
  {
    animal_id: 9, //Crane
    trail_id: 3,
    sighting: 19
  },
  {
    animal_id: 10, //Deer
    trail_id: 5,
    sighting: 25
  },
  {
    animal_id: 11, //Dog
    trail_id: 1,
    sighting: 80
  },
  {
    animal_id: 11, 
    trail_id: 2,
    sighting: 63
  },
  {
    animal_id: 11, 
    trail_id: 3,
    sighting: 72
  },
  {
    animal_id: 11, 
    trail_id: 4,
    sighting: 30
  },
  {
    animal_id: 11, 
    trail_id: 5,
    sighting: 60
  },
  {
    animal_id: 11, 
    trail_id: 6,
    sighting: 72
  },
  {
    animal_id: 11, 
    trail_id: 7,
    sighting: 20
  },
  {
    animal_id: 11, 
    trail_id: 8,
    sighting: 30
  },
  {
    animal_id: 11, 
    trail_id: 9,
    sighting: 72
  },
  {
    animal_id: 11, 
    trail_id: 10,
    sighting: 12
  },
  {
    animal_id: 11, 
    trail_id: 11,
    sighting: 66
  },
  {
    animal_id: 11, 
    trail_id: 12,
    sighting: 72
  },
  {
    animal_id: 11, 
    trail_id: 13,
    sighting: 33
  },
  {
    animal_id: 11, 
    trail_id: 14,
    sighting: 52
  },
  {
    animal_id: 11, 
    trail_id: 15,
    sighting: 32
  },
  {
    animal_id: 11, 
    trail_id: 16,
    sighting: 48
  },
  {
    animal_id: 12, //Donkey
    trail_id: 1,
    sighting: 13
  },
  {
    animal_id: 13, //Emu
    trail_id: 2,
    sighting: 5
  },
  {
    animal_id: 14, //Fish
    trail_id: 1,
    sighting: 19
  },
  {
    animal_id: 14, 
    trail_id: 2,
    sighting: 9
  },
  {
    animal_id: 14, 
    trail_id: 3,
    sighting: 36
  },
  {
    animal_id: 15, //Frog
    trail_id: 1,
    sighting: 16
  },
  {
    animal_id: 15, 
    trail_id: 2,
    sighting: 6
  },
  {
    animal_id: 15, 
    trail_id: 3,
    sighting: 28
  },
  {
    animal_id: 16, //Hawk
    trail_id: 1,
    sighting: 7
  },
  {
    animal_id: 17, //Horse
    trail_id: 4,
    sighting: 18
  },
  {
    animal_id: 18, //Lizard
    trail_id: 2,
    sighting: 28
  },
  {
    animal_id: 18, 
    trail_id: 4,
    sighting: 24
  },
  {
    animal_id: 18, 
    trail_id: 5,
    sighting: 19
  },
  {
    animal_id: 19, //Llama
    trail_id: 3,
    sighting: 19
  },
  {
    animal_id: 20, //Mountain Lion
    trail_id: 5,
    sighting: 1
  },
  {
    animal_id: 21, //Opossum
    trail_id: 1,
    sighting: 2 
  },
  {
    animal_id: 22, //Pig
    trail_id: 1,
    sighting: 13
  },
  {
    animal_id: 23, //Quail
    trail_id: 2,
    sighting: 5
  },
  {
    animal_id: 24, //Raccoon
    trail_id: 5,
    sighting: 9
  },
  {
    animal_id: 25, //Rat
    trail_id: 3,
    sighting: 26
  },
  {
    animal_id: 26, //River Otter
    trail_id: 1,
    sighting: 7
  },
  {
    animal_id: 27, //Skunk
    trail_id: 4,
    sighting: 18
  },
  {
    animal_id: 28, //Snake
    trail_id: 4,
    sighting: 28
  },
  {
    animal_id: 28, 
    trail_id: 5,
    sighting: 5
  },
  {
    animal_id: 29, //Squirrel
    trail_id: 1,
    sighting: 55
  },
  {
    animal_id: 29,
    trail_id: 2,
    sighting: 38
  },
  {
    animal_id: 29,
    trail_id: 3,
    sighting: 40
  },
  {
    animal_id: 29,
    trail_id: 4,
    sighting: 63
  },
  {
    animal_id: 29,
    trail_id: 5,
    sighting: 13
  },
  {
    animal_id: 30, //Turtle
    trail_id: 5,
    sighting: 25
  },
  {
    animal_id: 31, //Woodpecker
    trail_id: 5,
    sighting: 18
  },

];

const seedTrailAnimal = () => TrailAnimal.bulkCreate(TrailAnimalData);

module.exports = seedTrailAnimal;
