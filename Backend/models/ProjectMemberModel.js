import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import User from "./UserModel.js";
import ProjectRole from "./ProjectRoleModel.js";
import Project from "./ProjectModel.js";
import Role from "./RoleModel.js";

const { DataTypes } = Sequelize;

const ProjectMember = db.define(
  "ProjectMember",
  {
    projectMemberID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userID: {
      type: DataTypes.STRING,
    },
    roleID: {
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

ProjectMember.belongsTo(User, {
  foreignKey: "userID",
  targetKey: "userID",
});

ProjectMember.belongsTo(Role, {
  foreignKey: "roleID",
  targetKey: "roleID",
});

Project.hasMany(ProjectMember, {
  foreignKey: "projectID",
  sourceKey: "projectID",
});

ProjectRole.hasMany(ProjectMember, {
  foreignKey: "roleID",
  sourceKey: "roleID",
});

export default ProjectMember;
