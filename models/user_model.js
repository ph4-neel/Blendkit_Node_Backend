const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./index')

const Student = sequelize.define(
  'Student',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    father_name: {
      type: DataTypes.STRING,
    },
    mother_name: {
        type: DataTypes.STRING,
      },
    
    reg_no: {
        type: DataTypes.STRING,
      },
    phone : {
        type: DataTypes.STRING,
      },
    
    address: {
        type: DataTypes.STRING,
      },
  },
  {
    // Other model options go here
  },
);


console.log(Student === sequelize.models.User); 

module.exports = Student;