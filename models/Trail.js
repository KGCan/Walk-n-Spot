const { Model, DataTypes } = require('sequelize');
// const { isModuleNamespaceObject } = require('util/types');
const sequelize = require('../config/connection');

// create our User model
class Trail extends Model { }



Trail.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true
    },

    trail_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    city_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    lat: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    lon: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    trail_img: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    animal_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'animal',
        key: 'id'
      }
    },
 cb64c5b7a95816f5d876dd32c72084768b30
    trail_info: {
      type: DataTypes.STRING,
      allowNull: true,
      isURL: true
    },

 c8f322280caa69700c1be882cce28ca73e3fb953
 cb64c5b7a95816f5d876dd32c72084768b30
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