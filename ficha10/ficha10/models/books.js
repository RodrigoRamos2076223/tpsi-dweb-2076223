const { DataTypes } = require("sequelize")

module.export = (sequelize) => {
    const User = sequelize.define('book', {
        book_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        author_name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        publication_date:{
            type: DataTypes.DATE,
            allowNull: false,
        },
        genre:{
            type: DataTypes.STRING,
            allowNull: false
        },
        available_copies: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
       tableName: "books",
       timestap: false
    });
}
module.exports = Book;