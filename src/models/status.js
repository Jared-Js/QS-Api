const { DataTypes } = require('sequelize')
const sequelize = require('../config/data')

const status = sequelize.define('status', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.INTEGER,
        allowNull: false
    },  
    order: {
        type: DataTypes.INTEGER,
        allowNull: false,
        //validate : { //registro de cambios update
            //isInt:true,
            //min: 1
            //}
        }
    }, {
        tableName:"status",
        timestamps: true // Habilita los campos createdAt y updatedAt
});

module.exports = status;
