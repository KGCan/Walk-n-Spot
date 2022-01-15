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
        animal_name: 'Hawk',
    },
    {
        animal_name: 'Pig',
    },
    {
        animal_name: 'Horse',
    },
    {
        animal_name: 'Lizard',
    },
    {
        animal_name: 'Bobcat',
    },
    {
        animal_name: 'Crane',
    },
    {
        animal_name: 'Blue Herring',
    },
    {
        animal_name: 'Blue Jay',
    },
    {
        animal_name: 'Llama',
    },
    {
        animal_name: 'Emu',
    },
    {
        animal_name: 'Donkey',
    },
    {
        animal_name: 'Fish',
    },
    {
        animal_name: 'Raccoon',
    },
    {
        animal_name: 'Opossum',
    },
    {
        animal_name: 'Skunk',
    },
    {
        animal_name: 'Frog',
    },
    {
        animal_name: 'Beaver',
    },
    {
        animal_name: 'River Otter',
    },
    {
        animal_name: 'Snake',
    },
    {
        animal_name: 'Squirrel',
    },
    {
        animal_name: 'Quail',
    },
    {
        animal_name: 'Woodpecker',
    },
    {
        animal_name: 'Bat',
    },
    {
        animal_name: 'Rat',
    },

]

const seedAnimals = () => Animal.bulkCreate(animalData);

module.exports = seedAnimals;