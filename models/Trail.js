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
      allowNull: false,
      references: {
        model: 'animal',
        key: 'id'
      }
    },


  }
)