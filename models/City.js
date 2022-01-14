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
