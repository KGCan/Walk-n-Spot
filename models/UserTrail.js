<<<<<<< HEAD
// const UserTrail = sequelize.define('UserTrails', {}, { timestamps: false });

// imp primary parts of sequelize lib
const { Model, DataTypes } = require('sequelize');

=======
const { Model, DataTypes } = require('sequelize');
>>>>>>> e7b8bba2e3abaa6da0d102f0e352a56d53d5f19f
// import db connection from config
const sequelize = require('../config/connection');


<<<<<<< HEAD
// Initialize model (table) by extending off Seq Model class
class UserTrail extends Model { }

//create Junction Model/join/Through Table
UserTrail.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'user',
      key: 'id'
    }
  },
  trail_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'trail',
      key: 'id'
    }
  }
},
=======
// create through table model
class UserTrail extends Model { }

UserTrail.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    trail_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'trail',
        key: 'id'
      }
    }
  },
>>>>>>> e7b8bba2e3abaa6da0d102f0e352a56d53d5f19f
  // 2nd param of init
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
<<<<<<< HEAD
    modelName: 'user_trail',
=======
    modelName: 'user-trail',
>>>>>>> e7b8bba2e3abaa6da0d102f0e352a56d53d5f19f
  }
);

module.exports = UserTrail;