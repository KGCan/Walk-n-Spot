
const User = require("./User");
const Trail = require("./Trail")
// const City = require("./City")
// const Sighting = require("./Sighting")
const Animal = require("./Animal");
const UserTrail = require("./UserTrail");
const TrailAnimal = require("./TrailAnimal");


// ----   User & Trail  Assciations   ----  
User.belongsToMany(Trail, {
  through: UserTrail,
  // foreignKey: 'trail_id'
}
);

// This creates the `userId` foreign key in Trail??

Trail.belongsToMany(User,
  { through: UserTrail }
);

User.hasMany(UserTrail, {
  // foreignKey: 'user_id'
});
UserTrail.belongsTo(User, {
  // foreignKey: 'user_id'
});
Trail.hasMany(UserTrail, {
  // foreignKey: 'trail_id'
});
UserTrail.belongsTo(Trail, {
  // foreignKey: 'trail_id'
});



// ----   Trail & Animal Assciations   ----  
Trail.belongsToMany(Animal,
  { through: TrailAnimal }
);

Animal.belongsToMany(Trail,
  { through: TrailAnimal }
);



Trail.hasMany(TrailAnimal);
TrailAnimal.belongsTo(Trail);
Animal.hasMany(TrailAnimal);
TrailAnimal.belongsTo(Animal);

// City.hasMany(Trail, {
//     foreignKey: 'city_id'
// });

// Trail.belongsTo(City, {
//     foreignKey: 'city_id'
// });


// Animal.belongsToMany(Trail, {
//   through: TrailAnimal
// });


// Trail.belongsToMany(Animal, {
//   through: TrailAnimal
// });

// Trail.hasMany(TrailAnimal, {
//   foreignKey: 'trail_id'
// })
// TrailAnimal.belongsTo(Trail, {
//   foreignKey: 'trail_id'
// });


// Animal.hasMany(TrailAnimal, {
//   foreignKey: 'animal_id'
// })
// TrailAnimal.belongsTo(Animal, {
//   foreignKey: 'animal_id'
// })

// User.hasMany(Trail, {
//     foreignKey: 'user_id'
// });

// Trail.belongsTo(User, {
//     foreignKey: 'user_id'
// });

// User.hasMany(Sighting, {

// });

// Sighting.belongsToMany(User, {

// });

// Sighting.belongsToMany(Animal, {

// });


module.exports = { User, Trail, Animal, UserTrail, TrailAnimal } 