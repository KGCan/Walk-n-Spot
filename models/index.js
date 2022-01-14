const User = require("./User");
const Trail = require("./Trail")
// const City = require("./City")
// const Sighting = require("./Sighting")
const Animal = require("./Animal");
const TrailAnimal = require("./TrailAnimal");
const UserTrail = require("./UserTrail")



//   -------   Trail & User Associations Start -------
User.belongsToMany(Trail, {
  through: UserTrail,
  // foreignKey: 'user_id'
});

Trail.belongsToMany(User, {
  through: UserTrail,
  // foreignKey: 'trail_id'
});



User.hasMany(UserTrail, {
  // foreignKey: 'user_id'
})
UserTrail.belongsTo(User, {
  // foreignKey: 'user_id'
});
Trail.hasMany(UserTrail, {
  // foreignKey: 'trail_id'
})
UserTrail.belongsTo(Trail, {
  // foreignKey: 'trail_id'
});


// User.hasMany(Trail, {
//   foreignKey: 'user_id'
// });

// Trail.hasMany(User, {
//   foreignKey: 'trail_id'
// });

// // Trail.hasMany(User, {
// //   foreignKey: 'user_id'
// // });

// Trail.belongsTo(User, {
//   foreignKey: 'user_id'
// });
//   -------   Trail & User Associations END -------


//  ------- Trail &  Animal Associations START --------
Animal.belongsToMany(Trail, {
  through: TrailAnimal,
  foreignKey: 'animal_id'
});

Trail.belongsToMany(Animal, {
  through: TrailAnimal,
  foreignKey: 'trail_id'
});

Trail.hasMany(TrailAnimal, {
  foreignKey: 'trail_id'
})

TrailAnimal.belongsTo(Trail, {
  foreignKey: 'trail_id'
});

Animal.hasMany(TrailAnimal, {
  foreignKey: 'animal_id'
})

TrailAnimal.belongsTo(Animal, {
  foreignKey: 'animal_id'
})
//  ------- Trail &  Animal Associations END --------




module.exports = { User, Trail, Animal, TrailAnimal }












//  ---------------- DRAFT CODE  ----------------------


// City.hasMany(Trail, {
//     foreignKey: 'city_id'
// });

// Trail.belongsTo(City, {
//     foreignKey: 'city_id'
// });


// User.hasMany(Sighting, {

// });

// Sighting.belongsToMany(User, {

// });

// Sighting.belongsToMany(Animal, {

// });

