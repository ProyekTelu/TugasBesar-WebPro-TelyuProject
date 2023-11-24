import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import User from "./UserModel.js";

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
  },
  {
    freezeTableName: true,
  }
);

Project.belongsTo(User, {
  foreignKey: "projectOwnerID",
  targetKey: "userID",
});

export default Project;
