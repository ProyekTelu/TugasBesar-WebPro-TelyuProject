import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Faculty from "./FacultyModel.js";

const { DataTypes } = Sequelize;

const Major = db.define(
  "Major",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    degree: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    facultyCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    yearAppear: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
  }
);

Faculty.hasMany(Major, {
  foreignKey: "facultyCode",
  sourceKey: "code",
});

export default Major;
