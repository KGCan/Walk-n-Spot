const { Animal } = require('../models');

const animalData = [
    {
        animal_name: 'Bat',//1
    },
    {
        animal_name: 'Bear',//2
    },
    {
        animal_name: 'Beaver',//3
    },
    {
        animal_name: 'Blue Herring',//4
    },
    {
        animal_name: 'Bluejay',//5
    },
    {
        animal_name: 'Bobcat',//6
    },
    {
        animal_name: 'Cow',//7
    },
    {
        animal_name: 'Coyote',//8
    },
    {
        animal_name: 'Crane',//9
    },
    {
        animal_name: 'Deer',//10
    },
    {
        animal_name: 'Dog',//11
    },
    {
        animal_name: 'Donkey',//12
    },
    {
        animal_name: 'Emu',//13
    },
    {
        animal_name: 'Fish',//14
    },
    {
        animal_name: 'Frog',//15
    },
    {
        animal_name: 'Hawk',//16
    },
    {
        animal_name: 'Horse',//17
    },
    {
        animal_name: 'Lizard',//18
    },
    {
        animal_name: 'Llama',//19
    },
    {
        animal_name: 'Mountain Lion',//20
    },
    {
        animal_name: 'Opossum',//21
    },
    {
        animal_name: 'Pig',//22
    },
    {
        animal_name: 'Quail',//23
    },
    {
        animal_name: 'Raccoon',//24
    },
    {
        animal_name: 'Rat',//25
    },
    {
        animal_name: 'River Otter',//26
    },
    {
        animal_name: 'Skunk',//27
    },
    {
        animal_name: 'Snake',//28
    },
    {
        animal_name: 'Squirrel',//29
    },
    {
        animal_name: 'Turtle',//30
    },
    {
        animal_name: 'Woodpecker',//31
    },

]

const seedAnimals = () => Animal.bulkCreate(animalData);

module.exports = seedAnimals; 