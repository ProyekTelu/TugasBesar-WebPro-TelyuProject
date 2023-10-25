import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Fakultas = db.define(
  "Fakultas",
  {
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    kode: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Fakultas;
