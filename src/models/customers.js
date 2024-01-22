const { DataTypes } = require('sequalize');
const sequalize = require('../config/data');
const bcrypt = require('bcrypt');

const custommers = sequalize.define('customers', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    }, 
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    code: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    password:{
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = custommers
