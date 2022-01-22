const seedAnimal = require('./animal-seeds');
const seedTrail = require('./trail-seeds');
const seedUser = require('./user-seeds');
const seedTrailAnimal = require('./trailanimal-seeds');
const seedUserTrail = require('./usertrail-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {

  await sequelize.sync({ force: false });

  console.log('\n----- DATABASE SYNCED -----\n');

  await seedAnimal();
  console.log('\n----- Animals SEEDED -----\n');

  await seedTrail();
  console.log('\n----- Trails SEEDED -----\n');

  await seedTrailAnimal();
  console.log('\n----- TrailAnimal SEEDED -----\n');

  await seedUser();
  console.log('\n----- User SEEDED -----\n');

  await seedUserTrail();
  console.log('\n----- UserTrail SEEDED -----\n');

  process.exit(0);
};

seedAll();