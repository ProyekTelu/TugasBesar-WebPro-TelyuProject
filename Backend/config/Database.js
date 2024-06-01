import { Sequelize } from "sequelize";
import mysql2 from "mysql2";

const db = new Sequelize(
  "u741231707_telyu_project",
  "u741231707_zaky",
  "12345678Zaky",
  {
    host: "srv1412.hstgr.io",
    dialect: "mysql",
    dialectModule: mysql2,
  }
);

export default db;
