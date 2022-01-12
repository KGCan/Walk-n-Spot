const User = require("./User");

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


