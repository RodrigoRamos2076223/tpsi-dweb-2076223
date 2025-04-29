const { sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new sequelize('mysql://root:password@localhost:3306/ficha10')

const User = require("./models/users")(sequelize);
const Book = require("./models/books")(sequelize);
const Loan = require("./models/loans")(sequelize);

User.hasMany(Loan, {foreignKey: 'user_id'});
Loan.belongsTo(User, {foreignKey: 'user_id'});

Book.hasMany(Loan, {foreignKey: 'book_id'});
Loan.belongsTo(Book, {foreignKey: 'book_id'});

(async () => {
    await sequelize.sync({ force: true });
    const user = await user.create({
        first_name: 'Rodrigo',
        last_name: 'Ramos',
        email: 'rodrigo@asd.com',
        address: 'funchal',
        phone_number: 123456789
    });
});

Module.exports = {
    Loan,
    Book,
    User
}