import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Fakultas from "./FakultasModel.js";

const { DataTypes } = Sequelize;

const Prodi = db.define(
  "Prodi",
  {
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    kode: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    program: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    kodeFakultas: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tahunBerdiri: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
  }
);

Fakultas.hasMany(Prodi, {
  foreignKey: "kodeFakultas",
  sourceKey: "kode",
});

export default Prodi;
