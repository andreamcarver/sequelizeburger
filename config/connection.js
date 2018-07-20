var Sequelize = require("sequelize");

config = {
  username: process.env.user,
  password: process.env.password,
  database: process.env.database,
  host: process.env.host,
  port: process.env.PORT,
  dialect: "mysql"
};

var sequelize = new Sequelize(process.env.JAWSDB_URL, {})
// var sequelize = new Sequelize(
//   config.database,
//   config.username,
//   config.password,
//   config
// );

// Export connection for our ORM to use.
module.exports = sequelize;
