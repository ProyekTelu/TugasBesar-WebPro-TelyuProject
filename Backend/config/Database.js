import { Sequelize } from "sequelize";

const db = new Sequelize(
  "freedb_telyu_project",
  "freedb_bukanzaky",
  "nfjMy$MjGPPaJ4f",
  {
    host: "sql.freedb.tech",
    dialect: "mysql",
  }
);

export default db;
