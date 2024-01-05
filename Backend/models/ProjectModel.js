import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import User from "./UserModel.js";
import Request from "./RequestModel.js";

const { DataTypes } = Sequelize;

const Project = db.define(
  "Project",
  {
    projectID: {
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    projectOwnerID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    startProject: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endProject: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    openUntil: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    totalMember: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    groupLink: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    projectStatus: {
      type: DataTypes.ENUM(
        "Open Request",
        "Waiting to Start",
        "Active",
        "Finished"
      ),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

Project.belongsTo(User, {
  foreignKey: "projectOwnerID",
  as: "projectOwner",
  targetKey: "userID",
});

Project.hasMany(Request, {
  foreignKey: "projectID",
  sourceKey: "projectID",
  onDelete: "CASCADE",
});

export default Project;
