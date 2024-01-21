const Status = require('./status')
const Customers = require('./customers')
const DataTypes = require('sequelize')
const sequelize = require('../config/data')

const packages = sequelize.define('packages', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    tracking: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    weight: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
    }, {
        tableName: 'packages',
        timestamps: true
    
})


packages.belongsTo(Status, {foreignKey: 'id'})
packages.belongsTo(Customers, {foreignKey: 'id'})

module.exports = packages