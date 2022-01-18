const { Trail } = require('../models');

const trailData = [
    {
        trail_name: 'American River Parkway Trailhead',
        city_name: 'SACRAMENTO',
        lat: '38.6010',
        lon: '-121.5077',
        trail_img: './assets/images/creek-1-sm.jpg',
        animal_id: 1,
        trail_info: 'https://regionalparks.saccounty.net/Parks/Pages/AmericanRiverParkway.aspx'
    },
    {
        trail_name: 'Sacramento River Parkway',
        city_name: 'SACRAMENTO',
        lat: '38.5838',
        lon: '-121.5060',
        trail_img: './assets/images/creek-2.jpg',
        animal_id: 1,
        trail_info: "https://www.cityofsacramento.org/Public-Works/Engineering-Services/Projects/Current-Projects/Sacramento-River-Parkway"
    },
    {
        trail_name: 'Riverfront Promenade',
        city_name: 'SACRAMENTO',
        lat: '38.5770',
        lon: '-121.5086',
        trail_img: './assets/images/creek-3.jpg',
        animal_id: 2,
        trail_info: "https://www.cityofsacramento.org/Public-Works/Engineering-Services/Projects/Current-Projects/Sacramento-River-Parkway"

    },
    {
        trail_name: 'Creekside Park & Nature Area',
        city_name: 'Sacramento',
        lat: '38.6140',
        lon: '-121.3938',
        trail_img: './assets/images/creek-3.jpg',
        animal_id: 7,
        trail_info: "https://www.fecrpd.com/creekside-nature-area"

    },
    {
        trail_name: 'Bannon Creek Park & Parkway',
        city_name: 'Sacramento',
        lat: '38.6146',
        lon: '-121.5046',
        trail_img: './assets/images/creek-3.jpg',
        animal_id: 1,
        trail_info: "http://www.cityofsacramento.org/parksandrec/parks/park-directory/south-natomas/bannon-creek"
    }
]

const seedTrails = () => Trail.bulkCreate(trailData);

module.exports = seedTrails;