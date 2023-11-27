import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import User from "./UserModel.js";
import Project from "./ProjectModel.js";

const { DataTypes } = Sequelize;

const Request = db.define(
  "Request",
  {
    requestID: {
      primaryKey: true,
      unique: true,
      allowNull: false,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    userID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    projectID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("pending", "accepted", "rejected"),
      allowNull: false,
      defaultValue: "pending",
    },
  },
  {
    freezeTableName: true,
  }
);

Request.belongsTo(User, {
  foreignKey: "userID",
  targetKey: "userID",
});

Request.belongsTo(Project, {
  foreignKey: "projectID",
  targetKey: "projectID",
});

export default Request;
