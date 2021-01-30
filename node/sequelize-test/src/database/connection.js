const Sequelize = require('sequelize');

module.exports.sequelize = () => {
    return new Sequelize('sequelize-test', 'root', '', {
        host: 'localhost',
        dialect: 'mysql',
        pool: {
            max: 10,
            min: 0,
            idle: 10000
        }
    });
};
