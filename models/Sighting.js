Sighting.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },

        trail_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'trail',
                key: 'id'
            }
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