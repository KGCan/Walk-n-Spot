const { Trail } = require('../models');

const trailData = [
    {
        trail_name: 'American River Parkway Trailhead',
        coordinates: '38.6010° N, 121.5077° W',
        animal_id: 1
    },
    {
        trail_name: 'Sacramento River Parkway',
        coordinates: '38.5838° N, 121.5060° W',
        animal_id: 1
    },
    {
        trail_name: 'Riverfront Promenade',
        coordinates: '38.5770° N, 121.5086° W',
        animal_id: 1
    },
    {
        trail_name: 'Creekside Park & Nature Area',
        coordinates: '38.6140° N, 121.3938° W',
        animal_id: 1
    },
    {
        trail_name: 'Bannon Creek Park & Parkway',
        coordinates: '38.6146° N, 121.5046° W',
        animal_id: 1
    }
]

const seedTrails = () => Trail.bulkCreate(trailData);

module.exports = seedTrails;