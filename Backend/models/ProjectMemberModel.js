import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import User from "./UserModel.js";
import ProjectRole from "./ProjectRoleModel.js";

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

User.hasMany(ProjectMember, {
  foreignKey: "userID",
  sourceKey: "userID",
});

ProjectMember.belongsTo(ProjectRole, {
  foreignKey: "projectID",
  targetKey: "projectID",
});

ProjectMember.belongsTo(ProjectRole, {
  foreignKey: "roleID",
  targetKey: "roleID",
});

export default ProjectMember;
