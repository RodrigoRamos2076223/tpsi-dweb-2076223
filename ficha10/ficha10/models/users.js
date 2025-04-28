const { DataTypes } = require("sequelize")

module.export = (sequelize) => {
    const User = sequelize.define('user',
        {
            user_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            first_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            last_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
                email: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true
                },
                address: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                phone_number: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    unique: true,
                }
            },
     {
            tableName: "users",
            timestap: false
        });
}
