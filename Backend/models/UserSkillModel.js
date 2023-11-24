import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import User from "./UserModel.js";
import Skill from "./SkillModel.js";

const { DataTypes } = Sequelize;

const UserSkill = db.define(
  "UserSkill",
  {
    userSkillID: {
      primaryKey: true,
      unique: true,
      allowNull: false,
      DataTypes: DataTypes.STRING,
    },
    userID: {
      DataTypes: DataTypes.STRING,
    },
    skillID: {
      DataTypes: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

User.hasMany(UserSkill, {
  foreignKey: "userID",
  sourceKey: "userID",
});

Skill.hasMany(UserSkill, {
  foreignKey: "skillID",
  sourceKey: "skillID",
});

export default UserSkill;
