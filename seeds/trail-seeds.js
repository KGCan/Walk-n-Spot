const { Trail } = require('../models');

const trailData = [
    {
        trail_name: 'American River Parkway Trailhead',//1
        city_name: 'SACRAMENTO',
        lat: '38.6010',
        lon: '-121.5077',
        trail_img: './assets/images/trail-1.jpg',
        animal_id: 1,
        trail_info: 'https://regionalparks.saccounty.net/Parks/Pages/AmericanRiverParkway.aspx'
    },
    {
        trail_name: 'Sacramento River Parkway',//2
        city_name: 'SACRAMENTO',
        lat: '38.5838',
        lon: '-121.5060',
<<<<<<< HEAD
        trail_img: './public/assets/images/creek-2-sm.jpg',
        animal_id: 1,
=======
        trail_img: './assets/images/trail-2.jpg',
        animal_id: 1,
        trail_info: "https://www.cityofsacramento.org/Public-Works/Engineering-Services/Projects/Current-Projects/Sacramento-River-Parkway"
>>>>>>> main
    },
    {
        trail_name: 'Riverfront Promenade',//3
        city_name: 'SACRAMENTO',
        lat: '38.5770',
        lon: '-121.5086',
        trail_img: './assets/images/trail-3.jpg',
        animal_id: 2,
        trail_info: "https://www.cityofsacramento.org/Public-Works/Engineering-Services/Projects/Current-Projects/Sacramento-River-Parkway"

    },
    {
        trail_name: 'Creekside Park & Nature Area',//4
        city_name: 'SACRAMENTO',
        lat: '38.6140',
        lon: '-121.3938',
        trail_img: './assets/images/trail-4.jpg',
        animal_id: 7,
        trail_info: "https://www.fecrpd.com/creekside-nature-area"
    },
    {
        trail_name: 'Bannon Creek Park & Parkway',//5
        city_name: 'SACRAMENTO',
        lat: '38.6146',
        lon: '-121.5046',
        trail_img: './assets/images/trail-5.jpg',
        animal_id: 1,
        trail_info: "http://www.cityofsacramento.org/parksandrec/parks/park-directory/south-natomas/bannon-creek"
    },
    {
        trail_name: 'Natomas Oaks Park',//6
        city_name: 'SACRAMENTO',
        lat: '38.6052',
        lon: '-121.5171',
        trail_img: './assets/images/trail-6.jpg',
        animal_id: 1,
        trail_info: "http://www.cityofsacramento.org/Search-Results?q=Natomas%20Oaks%20Park"
    },
    {
        trail_name: 'Arcade Creek Park',//7
        city_name: 'SACRAMENTO',
        lat: '38.6564',
        lon: '-121.3350',
        trail_img: './assets/images/trail-7.jpg',
        animal_id: 1,
        trail_info: "http://www.cityofsacramento.org/ParksandRec/Parks/Park-Directory/Arden-Arcade"
    },
    {
        trail_name: 'Charlie-Jensen Park',//8
        city_name: 'SACRAMENTO',
        lat: '38.5048',
        lon: '-121.5060',
        trail_img: './assets/images/trail-8.jpg',
        animal_id: 1,
        trail_info: "http://www.cityofsacramento.org/ParksandRec/Parks/Park-Directory/South-Sacramento/Charlie-Jensen-Park"
    },
    {
        trail_name: 'Folsom Point State Park',//9
        city_name: 'FOLSOM',
        lat: '38.6990',
        lon: '-121.1273',
        trail_img: './assets/images/trail-9.jpg',
        animal_id: 1,
        trail_info: "https://www.folsom.ca.us/government/parks-recreation/parks-trails-and-open-space/all-parks"
    },
    {
        trail_name: 'Nimbus Flat State Recreation Area',//10
        city_name: 'FOLSOM',
        lat: '38.6357',
        lon: '-121.2165',
        trail_img: './assets/images/trail-10.jpg',
        animal_id: 1,
        trail_info: "https://www.folsom.ca.us/government/parks-recreation/parks-trails-and-open-space/all-parks"
    },
    {
        trail_name: 'Lake Clementine Trail',//11
        city_name: 'AUBURN',
        lat: '38.9163',
        lon: '-121.0354',
        trail_img: './assets/images/trail-11.jpg',
        animal_id: 1,
        trail_info: "https://www.visitplacer.com/lake-clementine-trail/"
    },
    {
<<<<<<< HEAD
        trail_name: 'Creekside Park & Nature Area',
        city_name: 'Sacramento',
        lat: '38.6140',
        lon: '-121.3938',
        trail_img: './public/assets/images/creek-3-sm.jpg',
        animal_id: 7
    },
    {
        trail_name: 'Bannon Creek Park & Parkway',
        city_name: 'Sacramento',
        lat: '38.6146',
        lon: '-121.5046',
        trail_img: './public/assets/images/creek-3-sm.jpg',
        animal_id: 1
    }
=======
        trail_name: 'Quarry Road Trail',//12
        city_name: 'AUBURN',
        lat: '38.9123',
        lon: '-121.0356',
        trail_img: './assets/images/trail-12.jpg',
        animal_id: 1,
        trail_info: "https://www.alltrails.com/trail/us/california/middle-fork-american-river-quarry-trail"
    },
    {
        trail_name: 'Auburn Trail Run',//13
        city_name: 'AUBURN',
        lat: '38.8896',
        lon: '-121.0689',
        trail_img: './assets/images/trail-13.jpg',
        animal_id: 1,
        trail_info: "https://www.trailrunproject.com/directory/8007186/greater-auburn"
    },
    {
        trail_name: 'Overlook Park',//14
        city_name: 'AUBURN',
        lat: '38.8891',
        lon: '-121.0689',
        trail_img: './assets/images/trail-14.jpg',
        animal_id: 1,
        trail_info: "http://www.auburnrec.com/parks_overlook.php"
    },
    {
        trail_name: 'Auburn Bike Park',//15
        city_name: 'AUBURN',
        lat: '38.8778',
        lon: '-121.0675',
        trail_img: './assets/images/trail-15.jpg',
        animal_id: 1,
        trail_info: "https://auburnbikepark.org/"
    },
    {
        trail_name: 'Bicentennial Park ',//16
        city_name: 'AUBURN',
        lat: '38.8951',
        lon: '-121.0765',
        trail_img: './assets/images/trail-16.jpg',
        animal_id: 1,
        trail_info: "http://www.auburnrec.com/parks_bicentennial.php"
    },
 
>>>>>>> main
]

const seedTrails = () => Trail.bulkCreate(trailData);

module.exports = seedTrails;