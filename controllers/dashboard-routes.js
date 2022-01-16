const router = require('express').Router();
// const withAuth = require('../utils/auth');
const sequelize = require('../config/connection');
const { User } = require('../models');


router.get('/', (req, res) => {
    console.log(req.session);
    User.findAll({
        where: {
            id: req.session.user_id
        },

    })
        .then(trailData => {

            const trails = trailData.map(trail => trail.get({ plain: true }));
            console.log(trailData)

            res.render('dashboard', {
                trails,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;