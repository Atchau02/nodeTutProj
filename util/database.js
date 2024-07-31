const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-tut", "root", "Akat.9970", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
