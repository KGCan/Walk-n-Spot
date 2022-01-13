const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Ciy model
class City extends Model {
}

City.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    city_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    trail_id: {
      references: {
        model: 'trail',
        key: 'id'
      }
    },
  }
)

module.exports = City;