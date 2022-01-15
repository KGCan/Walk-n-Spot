const { UserTrail } = require('../models');

const userTrailData = [
  {
    user_id: 1,
    trail_id: 1
  },
  {
    user_id: 2,
    trail_id: 1
  },
  {
    user_id: 3,
    trail_id: 2
  },
  {
    user_id: 4,
    trail_id: 2
  },
  {
    user_id: 4,
    trail_id: 3
  },
  {
    user_id: 5,
    trail_id: 3
  },
]

const seedUserTrail = () => UserTrail.bulkCreate(userTrailData);

module.exports = seedUserTrail;