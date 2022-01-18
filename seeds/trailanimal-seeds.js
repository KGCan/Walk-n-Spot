const { TrailAnimal } = require('../models');

const TrailAnimalData = [
  {
    animal_id: 1,
    trail_id: 1,
    sighting: 1 //to tell how many animal was sighted in that trail
  },
  {
    animal_id: 7,
    trail_id: 1,
    sighting: 13
  },
  {
    animal_id: 1,
    trail_id: 2,
    sighting: 5
  },
  {
    animal_id: 1,
    trail_id: 5,
    sighting: 9
  },
  {
    animal_id: 7,
    trail_id: 3,
    sighting: 6
  },
  {
    animal_id: 8,
    trail_id: 1,
    sighting: 7
  },
  {
    animal_id: 8,
    trail_id: 4,
    sighting: 18
  },
  {
    animal_id: 5,
    trail_id: 4,
    sighting: 28
  },
  {
    animal_id: 5,
    trail_id: 3,
    sighting: 19
  },
  {
    animal_id: 2,
    trail_id: 5,
    sighting: 25
  },

];

const seedTrailAnimal = () => TrailAnimal.bulkCreate(TrailAnimalData);

module.exports = seedTrailAnimal;
