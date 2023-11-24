import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const ProjectSkill = db.define(
  "ProjectSkill",
  {
    projectSkillID: {
      primaryKey: true,
      unique: true,
      allowNull: false,
      DataTypes: DataTypes.INTEGER,
      autoIncrement: true,
    },
    projectID: {
      DataTypes: DataTypes.INTEGER,
    },
    skillID: {
      DataTypes: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
  }
);

export default ProjectSkill;
