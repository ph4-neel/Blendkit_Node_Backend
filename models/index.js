const { Sequelize } = require('sequelize');


//connection established with mysql database
const sequelize = new Sequelize('blendkit_node', 'root', '', {
    host: 'localhost',
    dialect:'mysql' 
  });

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

module.exports = sequelize;