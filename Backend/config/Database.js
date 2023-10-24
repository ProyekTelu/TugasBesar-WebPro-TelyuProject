import { Sequelize } from "sequelize";

const db = new Sequelize("test", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
