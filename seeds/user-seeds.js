const { User } = require('../models');

const userData = [
    {
        username: 'john1234',
        email: 'john@example.com',
        password: '1234',
        trail_id: 1
    },
    {
        username: 'jane4567',
        email: 'jane@example.com',
        password: '4567',
        trail_id: 1
    },
    {
        username: 'fred8910',
        email: 'fred252@example.com',
        password: '8910',
        trail_id: 1
    },
    {
        username: 'mary1112',
        email: 'mary@example.com',
        password: '1112',
        trail_id: 1
    },
    {
        username: 'peter1314',
        email: 'mary5@example.com',
        password: '1314',
        trail_id: 1
    },
    {
        username: 'gwen1516',
        email: 'gwen@example.com',
        password: '1516',
        trail_id: 1
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;