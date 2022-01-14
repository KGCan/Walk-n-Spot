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
      allowNull: false,
      references: {
        model: 'animal',
        key: 'id'
      }
    }, 
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'trail'
  }
)


  }
)