import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import User from "./UserModel.js";
import Skill from "./SkillModel.js";

const { DataTypes } = Sequelize;

const UserSkill = db.define(
  "UserSkill",
  {
    userSkillID: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userID: {
      type: DataTypes.STRING,
    },
    skillID: {
      type: DataTypes.INTEGER,
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

UserSkill.belongsTo(Skill, {
  foreignKey: "skillID",
  sourceKey: "skillID",
});

export default UserSkill;
