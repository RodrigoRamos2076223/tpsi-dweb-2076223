const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://root:password@localhost:3306/ficha11')

const User = require("./models/users")(sequelize, DataTypes);
const Book = require("./models/books")(sequelize, DataTypes);
const Loan = require("./models/loans")(sequelize, DataTypes);

User.hasMany(Loan, {foreignKey: 'user_id'});
Loan.belongsTo(User, {foreignKey: 'user_id'});

Book.hasMany(Loan, {foreignKey: 'book_id'});
Loan.belongsTo(Book, {foreignKey: 'book_id'});

(async () => {
    try {
        await sequelize.sync({ force: true });
        const user = await User.create({
            first_name: 'Rodrigo',
            last_name: 'Ramos',
            email: 'rodrigo@asd.com',
            address: 'funchal',
            phone_number: 123456789
        });
        const book = await Book.create({
            title: 'Wasd',
            author_name: 'Rodrigo',
            publication_date: 2025-05-05,
            genre: 'educational',
            available_copies: 100
        });
        const loan = await Loan.create({
            user_id: 1,
            book_id: 1,
            loan_date: 2025-05-05,
            return_date: 2025-05-10
        }); 
        console.log('Database synchronized');
    } catch (error) {
        console.error('Error synchronizing database:', error);
    }
})();

module.exports = {
    Loan,
    Book,
    User,
    sequelize
}