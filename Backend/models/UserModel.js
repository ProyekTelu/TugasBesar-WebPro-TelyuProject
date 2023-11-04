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
      allowNull: true,
      unique: true,
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
      allowNull: true,
    },
    kelas: {
      type: DataTypes.STRING,
    },
    phoneNumber: {
      type: DataTypes.STRING,
    },
    photoProfile: {
      type: DataTypes.BLOB("long"),
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

User.addHook("beforeCreate", async (user) => {
  const prefix = "130";
  let isUnique = false;
  let generatedNomorInduk;

  while (!isUnique) {
    const randomDigits = Math.floor(Math.random() * 10000000);
    generatedNomorInduk = prefix + randomDigits.toString().padStart(3, "0");

    const existingUser = await User.findOne({
      where: {
        nomorInduk: generatedNomorInduk,
      },
    });

    if (!existingUser) {
      isUnique = true;
    }
  }

  user.nomorInduk = generatedNomorInduk;
});

Fakultas.hasMany(User, {
  foreignKey: "kodeFakultas",
  sourceKey: "kode",
});

export default User;
