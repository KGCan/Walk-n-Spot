const { Model, DataTypes } = require('sequelize');
// const { isModuleNamespaceObject } = require('util/types');
const sequelize = require('../config/connection');

// create our User model
class Trail extends Model { }



Trail.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    trail_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    city_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    lat: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    lon: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    animal_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'animal',
        key: 'id'
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'trail'
  }
)

module.exports = Trail
