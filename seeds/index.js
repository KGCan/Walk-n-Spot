const seedAnimal = require('./animal-seeds');
const seedTrail = require('./trail-seeds');
// const seedCity = require('./city-seeds');
const seedUser = require('./user-seeds');
const seedUserTrail = require('./usertrail-seeds');


const sequelize = require('../config/connection');

sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
  .then(function () {
    return sequelize.sync({ force: true });
  })
  .then(function () {
    return sequelize.query('SET FOREIGN_KEY_CHECKS = 1')
  })
  .then(function () {
    console.log('Database synched.');
  }, function (err) {
    console.log(err);
  });

//async.series([
// function (callback) {
//   sequelize.query("SET FOREIGN_KEY_CHECKS = 0").complete(callback);
// },
// function (callback) {
//   sequelize.sync({ force: true }).complete(callback);
// },
// function (callback) {
//   sequelize.query("SET FOREIGN_KEY_CHECKS = 1").complete(callback);
// }]
// , callback);


const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedAnimal();
  console.log('\n----- Animals SEEDED -----\n');

  await seedTrail();
  console.log('\n----- Trails SEEDED -----\n');

  // await seedCity();
  // console.log('\n----- Cities SEEDED -----\n');

  await seedUser();
  console.log('\n----- User SEEDED -----\n');

  await seedUserTrail();
  console.log('\n----- UserTrail SEEDED -----\n');

  process.exit(0);
};

seedAll();