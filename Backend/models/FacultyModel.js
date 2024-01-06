import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Faculty = db.define(
  "Faculty",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description:{
      type : DataTypes.TEXT,

    }
  },
  {
    freezeTableName: true,
  }
);

export default Faculty;
