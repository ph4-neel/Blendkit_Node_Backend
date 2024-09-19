const { DataTypes } = require('sequelize');
const sequelize = require('./config');


const Student = sequelize.define(
    'Student',
    {
        // Model attributes are defined here
        Name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
        },
        phone: {
            type: DataTypes.STRING,
        },
        college: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        department: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        sin: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        password: {
            type: DataTypes.STRING,
        },
        isActive: {
            type: DataTypes.BOOLEAN,
        },
    },
    {

    },
);

module.exports = Student
console.log(Student === sequelize.models.Student);