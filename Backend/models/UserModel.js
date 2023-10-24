import { HasMany, Sequelize } from "sequelize";
import db from "../config/Database.js";
import Fakultas from "./FakultasModel.js";
import Prodi from "./ProdiModel.js";

const { DataTypes } = Sequelize;

const User = db.define(
  "users",
  {
    nomorInduk: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [10],
      },
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 20],
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 20],
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    kodeDosen: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    kodeFakultas: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    kodeProdi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    kelas: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    freezeTableName: true,
  }
);

Fakultas.hasMany(User, {
  foreignKey: "kodeFakultas",
  sourceKey: "kode",
});

Prodi.hasMany(User, {
  foreignKey: "kodeProdi",
  sourceKey: "kode",
});

export default User;
