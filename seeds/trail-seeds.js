const { Trail } = require('../models');

const trailData = [
    {
        trail_name: 'American River Parkway Trailhead',
        city_name: 'SACRAMENTO',
        lat: '38.6010',
        lon: '-121.5077',
        trail_img: './assets/images/creek-1-sm.jpg',
        alltrails: 'https://www.alltrails.com/trail/us/california/american-river-bike-trail-jedediah-smith-memorial-trail',
        animal_id: 1,
    },
    {
        trail_name: 'Sacramento River Parkway',
        city_name: 'SACRAMENTO',
        lat: '38.5838',
        lon: '-121.5060',
        trail_img: './assets/images/creek-2.jpg',
        alltrails: 'https://www.alltrails.com/trail/us/california/sacramento-river-parkway-trail',
        animal_id: 1,    
    },
    {
        trail_name: 'Riverfront Promenade',
        city_name: 'SACRAMENTO',
        lat: '38.5770',
        lon: '-121.5086',
        trail_img: './assets/images/creek-3.jpg',
        alltrails: 'https://www.alltrails.com/trail/us/california/sacramento-waterfront-trail',
        animal_id: 2,
    },
    {
         trail_name: 'Creekside Park & Nature Area',
         city_name: 'SACRAMENTO',
         lat: '38.6140',
         lon: '-121.3938',
         trail_img: './assets/images/creek-3.jpg',
         alltrails: 'https://www.alltrails.com/trail/us/california/creekside-nature-trail--3',
         animal_id: 7,

    },
    {
         trail_name: 'Bannon Creek Park & Parkway',
         city_name: 'SACRAMENTO',
         lat: '38.6146',
         lon: '-121.5046',
         trail_img: './assets/images/creek-3.jpg',
         alltrails: 'https://www.alltrails.com/trail/us/arizona/bannon-creek-trail-to-trail-396',
         animal_id: 1,

    }
]

const seedTrails = () => Trail.bulkCreate(trailData);

module.exports = seedTrails;