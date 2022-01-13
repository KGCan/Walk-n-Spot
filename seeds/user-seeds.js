const { User } = require('../models');

const userData = [
    {
        username: 'john1234',
        email: 'john@example.com',
        password: '1234'
    },
    {
        username: 'jane4567',
        email: 'jane@example.com',
        password: '4567'
    },
    {
        username: 'fred8910',
        email: 'fred@example.com',
        password: '8910'
    },
    {
        username: 'mary1112',
        email: 'mary@example.com',
        password: '1112'
    },
    {
        username: 'peter1314',
        email: 'mary@example.com',
        password: '1314'
    },
    {
        username: 'gwen1516',
        email: 'gwen@example.com',
        password: '1516'
    }
]

const seedUsers = () => Trail.bulkCreate(userData);

module.exports = seedUsers;