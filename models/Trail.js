// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Trail model (table) by extending off Sequelize's Model class
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

    coordinates: {
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
    
  }
)

module.exports = Trail;