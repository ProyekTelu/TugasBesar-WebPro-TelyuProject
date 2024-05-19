import { HasMany, Sequelize } from "sequelize";
import db from "../config/Database.js";
import Faculty from "./FacultyModel.js";
import Major from "./majorModel.js";

const { DataTypes } = Sequelize;

const User = db.define(
  "users",
  {
    userID: {
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
    lectureCode: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    facultyCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    majorCode: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    kelas: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phoneNumber: {
      type: DataTypes.STRING,
    },
    photoProfileImage: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    photoProfileUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

User.addHook("beforeCreate", async (user) => {
  const prefix = "130";
  let isUnique = false;
  let generatedUserID;

  while (!isUnique) {
    const randomDigits = Math.floor(Math.random() * 10000000);
    generatedUserID = prefix + randomDigits.toString().padStart(3, "0");

    const existingUser = await User.findOne({
      where: {
        userID: generatedUserID,
      },
    });

    if (!existingUser) {
      isUnique = true;
    }
  }

  user.userID = generatedUserID;
});

User.belongsTo(Faculty, {
  foreignKey: "facultyCode", 
  targetKey: "code",
});

User.belongsTo(Major, {
  foreignKey: "majorCode",
  targetKey: "code",
});

export default User;
