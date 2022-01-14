const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Animal model
class Animal extends Model {
}

Animal.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    animal_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    sighting_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'sighting',
        key: 'id'
      }
    },

    // counter: {

    // }
  },

  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'animal'
  }
)

module.exports = Animal;