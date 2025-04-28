const { sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://root:password@localhost:3306/ficha10')

const User = require("./models/users")(sequelize);
const Books = require("./models/books")(sequelize);
const Loans = require("./models/loans")(sequelize);

(async () => {
    await sequelize.sync({ force: true });
    const user = await user.create({
        first_name: 'Rodrigo',
        last_name: 'Ramos',
        email: 'rodrigo@asd.com',
        address: 'funchal',
        phone_number: 123456789
    }
    )
}
)