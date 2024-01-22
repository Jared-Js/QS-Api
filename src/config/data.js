const { Sequelize } = require("sequelize");

const sequalize = new Sequelize ({
    database: 'query-qs-app',
    username: "postgress",
    password: "1234",
    host: "127.0.0.1",
    dialect: "postgress"
})


module.exports = sequalize; //exportacion de la configuracion