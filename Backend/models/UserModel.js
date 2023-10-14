import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const User = db.define(
  "users",
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    userName: DataTypes.STRING,
    gender: DataTypes.STRING,
    role: DataTypes.STRING,
  },
  {
    freezTableName: true,
  }
);

export default User;

(async () => {
  await db.sync();
})();
