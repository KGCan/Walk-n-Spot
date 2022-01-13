const User = require("./User");
const Trail = require("./Trail")
const City = require("./City")
const Sighting = require("./Sighting")
const Animal = require("./Animal")

City.hasMany(Trail, {

});

Trail.belongsTo(City, {

});

Animal.belongsToMany(Trail, {

});

Trail.hasMany(Animal, {

});

User.hasMany(Trail, {

});

Trail.hasMany(User, {

});

User.hasMany(Sighting, {

});

Sighting.belongsToMany(User, {

});

Sighting.belongsToMany(Animal, {

});


module.exports = {Trail, City, Animal, User, Sighting};