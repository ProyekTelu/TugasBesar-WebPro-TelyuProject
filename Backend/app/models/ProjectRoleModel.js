import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Role from "./RoleModel.js";
import Project from "./ProjectModel.js";

const { DataTypes } = Sequelize;

const ProjectRole = db.define(
  "ProjectRole",
  {
    projectRoleID: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    roleID: {
      type: DataTypes.INTEGER,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    projectID: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
  }
);

Project.hasMany(ProjectRole, {
  foreignKey: "projectID",
  sourceKey: "projectID",
  onDelete: "CASCADE",
});

ProjectRole.belongsTo(Role, {
  foreignKey: "roleID",
  targetKey: "roleID",
});

export default ProjectRole;
