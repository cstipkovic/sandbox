const Sequelize = require('sequelize');
const sequelize = require('../database/connection');

const User = sequelize.define('user', {
    firstName: {
        type: Sequelize.STRING,
        field: 'first_name'
    },
    lastName: {
        type: Sequelize.STRING
    }
}, {
    freezeTableName: true
});

User.sync({ force: true }).then(() => {
    return User.create({
        firstName: 'Clauber',
        lastName: 'Stipkovic'
    });
});