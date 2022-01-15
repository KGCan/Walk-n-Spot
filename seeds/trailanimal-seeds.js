const { TrailAnimal } = require('../models');

const TrailAnimalData = [
  {
    animal_id: 1,
    trail_id: 1,
    //counter = 5, to tell how many animal was sighted in that trail
  },
  {
    animal_id: 2,
    trail_id: 1,
  },
  {
    animal_id: 4,
    trail_id: 1,
  },
  {
    animal_id: 7,
    trail_id: 1,
  },

];

const seedTrailAnimal = () => TrailAnimal.bulkCreate(TrailAnimalData);

module.exports = seedTrailAnimal;
