const { Animal } = require('../models');

const animalData = [
    {
        animal_name: 'Deer',
    },
    {
        animal_name: 'Bear',
    },
    {
        animal_name: 'Turtles',
    },
    {
        animal_name: 'Cow',
    },
    {
        animal_name: 'Dog',
    },
    {
        animal_name: 'Mountain Lion',
    },
    {
        animal_name: 'Coyote',
    },
    {
        animal_name: 'Fish',
    },
    {
        animal_name: 'Pig',
    },
    {
        animal_name: 'Horse',
    },

]

const seedAnimals = () => Animal.bulkCreate(animalData);

module.exports = seedAnimals;