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
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'trail',
        key: 'id'
      }
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'city'
  }
)
