import { Sequelize } from "sequelize";

const db = new Sequelize("telyu_project", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
