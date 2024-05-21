import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Project from "./ProjectModel.js";
import Skill from "./SkillModel.js";

const { DataTypes } = Sequelize;

const ProjectSkill = db.define(
  "ProjectSkill",
  {
    projectSkillID: {
      primaryKey: true,
      unique: true,
      allowNull: false,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    projectID: {
      type: DataTypes.INTEGER,
    },
    skillID: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
  }
);

Project.hasMany(ProjectSkill, {
  foreignKey: "projectID",
  sourceKey: "projectID",
  onDelete: "CASCADE",
});

ProjectSkill.belongsTo(Skill, {
  foreignKey: "skillID",
  sourceKey: "skillID",
});

export default ProjectSkill;
