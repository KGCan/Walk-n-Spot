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
      references: {
        model: 'sighting',
        key: 'id'
      }
    },
  }
)