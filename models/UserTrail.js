// imp primary parts of sequelize lib
const { Model, DataTypes } = require('sequelize');

// import db connection from config
const sequelize = require('../config/connection');


// Initialize model (table) by extending off Seq Model class
class UserTrail extends Model { }

//create Junction Model/join/Through Table

UserTrail.init(
  // define columns
  {
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
  // 2nd param of init
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user_trail',
  }
);

module.exports = UserTrail;
