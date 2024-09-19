const { DataTypes } = require('sequelize');
const sequelize = require('./config');


const College = sequelize.define(
    'Department',
    {
        // Model attributes are defined here
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
        },
        type: {
            type: DataTypes.STRING,
        },
        
    },
    {

    },
);

module.exports = Department
console.log(College === sequelize.models.Department);