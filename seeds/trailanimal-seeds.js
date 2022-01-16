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
  },
  {
    animal_id: 8,
    trail_id: 1,
  },
  {
    animal_id: 8,
    trail_id: 4,
  },
  {
    animal_id: 5,
    trail_id: 4,
  },
  {
    animal_id: 5,
    trail_id: 3,
  },
  {
    animal_id: 2,
    trail_id: 5,
  },

];

const seedTrailAnimal = () => TrailAnimal.bulkCreate(TrailAnimalData);

module.exports = seedTrailAnimal;
