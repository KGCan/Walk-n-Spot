const { Animal } = require('../models');

const animalData = [
    {
        animal_name: 'Bat',
    },
    {
        animal_name: 'Bear',
    },
    {
        animal_name: 'Beaver',
    },
    {
        animal_name: 'Blue Herring',
    },
    {
        animal_name: 'Bluejay',
    },
    {
        animal_name: 'Bobcat',
    },
    {
        animal_name: 'Cow',
    },
    {
        animal_name: 'Coyote',
    },
    {
        animal_name: 'Crane',
    },
    {
        animal_name: 'Deer',
    },
    {
        animal_name: 'Dog',
    },
    {
        animal_name: 'Donkey',
    },
    {
        animal_name: 'Emu',
    },
    {
        animal_name: 'Fish',
    },
    {
        animal_name: 'Frog',
    },
    {
        animal_name: 'Hawk',
    },
    {
        animal_name: 'Horse',
    },
    {
        animal_name: 'Lizard',
    },
    {
        animal_name: 'Llama',
    },
    {
        animal_name: 'Mountain Lion',
    },
    {
        animal_name: 'Opossum',
    },
    {
        animal_name: 'Pig',
    },
    {
        animal_name: 'Quail',
    },
    {
        animal_name: 'Raccoon',
    },
    {
        animal_name: 'Rat',
    },
    {
        animal_name: 'River Otter',
    },
    {
        animal_name: 'Skunk',
    },
    {
        animal_name: 'Snake',
    },
    {
        animal_name: 'Squirrel',
    },
    {
        animal_name: 'Turtle',
    },
    {
        animal_name: 'Woodpecker',
    },

]

const seedAnimals = () => Animal.bulkCreate(animalData);

module.exports = seedAnimals; 