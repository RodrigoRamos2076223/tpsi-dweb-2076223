const { DataTypes } = require("sequelize")

module.export = (sequelize) => {
    const Loan = sequelize.define('loan', {
        loan_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "users",
                key: "user_id"
            }
        },
        book_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: "books",
                keu: "book_id"
            }
        },
        loan_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        return_date: {
            type: DataTypes.DATE,
            allowNull: false
        }
    },
    {
       tableName: "loans",
       timestap: false
    });

    Loan.associate = (models) => {
        Loan.belongsTo(models.User, {
            foreignKey: 'user_id',
            as: 'user'
        });
    Loan.associate = (models) => {
        Loan.belongsTo(models.Book, {
            foreignKey: 'book_id',
            as: 'book'
            });
    };
    return Loan;
   
}}

