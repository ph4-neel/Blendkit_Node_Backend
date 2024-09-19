const { DataTypes } = require('sequelize');
const sequelize = require('./config');


const College = sequelize.define(
    'College',
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

module.exports = College
console.log(College === sequelize.models.College);