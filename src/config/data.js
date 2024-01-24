const { Sequelize } = require("sequelize");

const sequalize = new Sequelize ({
    database: "postgres",
    username: "postgres",
    password: "1234",
    host: "127.0.0.1",
    dialect: "postgres"
})


module.exports = sequalize; //exportacion de la configuracion
