const Sequelize = require('sequelize');

const sequelize = new Sequelize('sequelize-test', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        idle: 10000
    }
});

const app = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        
        sequelize.close();
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

app();